import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';

import { User } from '../models/user';
import { generateToken } from './helpers/user';

export const userSigIn: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userFound: User | null = await User.findOne({ where: { email } });

    if (!userFound) {
      return res.status(404).json({ message: 'User not found' });
    }

    const comparedPassword = await bcrypt.compare(
      password,
      userFound?.password
    );

    if (!comparedPassword) {
      return res.status(404).json({ message: 'Password invalid' });
    }

    const token = generateToken(userFound.id, userFound.email);

    return res.status(200).json({
      data: {
        name: userFound.name,
        token,
      },
    });
  } catch (error) {
    console.error('error-user-signIn:', error);
    return res.status(404).json({ message: error });
  }
};

export const persistLogin: RequestHandler = (req, res) => {
  return res.status(200).json({
    user: {
      authenticated: true,
    },
  });
};

export const userRegister: RequestHandler = async (req, res, next) => {
  const { email, name, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        email,
        password: hashedPassword,
      },
    });

    if (!created) {
      return res.status(400).json({ message: 'User already exists' });
    }

    return res.status(200).json({
      message: 'user created successfully',
      data: {
        user: user.dataValues,
      },
    });
  } catch (error) {
    console.error('register-user--error:', error);
    return res.status(400).json({ message: error });
  }
};

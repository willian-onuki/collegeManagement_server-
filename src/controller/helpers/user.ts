import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

export const generateToken = (userId: string, email: string) => {
  if (secretKey) {
    const token = jwt.sign({ userId, email }, secretKey, {
      expiresIn: 500,
    });
    return token;
  } else {
    throw new Error('secretKey not provided');
  }
};

export const verifyToken: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(400).json({
      message: 'Token not provided',
    });
  }
  if (secretKey) {
    jwt.verify(String(token), secretKey, (err, decode) => {
      if (err) {
        return res.status(401).json({
          data: {
            authenticated: false,
          },
          message: 'Invalid Token',
        });
      } else {
        console.log('decode', decode)
        next();
      }
    });
  } else {
    return res.status(400).json({
      message: 'SecretKey not provided',
    });
  }
};

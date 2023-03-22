import { RequestHandler } from 'express';

import { College } from '../models/college';

export const registerCollege: RequestHandler = async (req, res, next) => {
  const data = req.body;
  console.log("🚀 ~ file: college.ts:7 ~ constregisterCollege:RequestHandler= ~ data:", data)

  try {
    const college: College = await College.create({ ...data });

    return res
      .status(200)
      .json({ message: 'College registered successfully', data: college });
  } catch (error) {
    console.error('error-register-college:', error);
    return res.status(400).json({ message: error });
  }
};


export const getAllCollege: RequestHandler = async (req, res, next) => {

  try {
    const allCollege: College[] = await College.findAll();

    return res
      .status(200)
      .json({ message: 'College deleted successfully', data: allCollege });
  } catch (error) {
    console.error('getAll-college-error:', error);
    return res.status(400).json({ message: error });
  }
};

export const getByIdCollege: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const foundCollege: College | null = await College.findByPk(id);
    return res
      .status(200)
      .json({ message: 'College feched successfully', data: foundCollege });
  } catch (error) {
    console.error('find-college-error:', error);
    return res.status(400).json({ message: error });
  }
};

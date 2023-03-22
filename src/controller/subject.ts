import { RequestHandler } from 'express';
import { Subject } from '../models/subject';

export const getAllSubject: RequestHandler = async (req, res) => {
  try {
    const allSubject: Subject[] = await Subject.findAll();

    return res.status(200).json({ data: allSubject });
  } catch (error) {
    return res.status(400).json({ message: 'Find all Subject failed' });
  }
};

export const getSubjectById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const foundSubject: Subject | null = await Subject.findByPk(id);

    return res.status(200).json({ data: foundSubject });
  } catch (error) {
    console.error('find-subject-by-id-error', error);
    return res.status(400).json({ message: 'Find Subject By Id failed' });
  }
};

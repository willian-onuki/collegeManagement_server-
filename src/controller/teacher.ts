import { RequestHandler } from 'express';
import { Teacher } from '../models/teacher';

export const getAllTeacher: RequestHandler = async (req, res) => {
  try {
    const allTeacher: Teacher[] = await Teacher.findAll();

    return res.status(200).json({ data: allTeacher });
  } catch (error) {
    return res.status(400).json({ message: 'Find all Teacher failed' });
  }
};

export const findTeacherBySubjectId: RequestHandler = async (req, res) => {
  const { subject_id } = req.params;

  try {
    const teachersBySubject: Teacher[] = await Teacher.findAll({
      where: { subject_id },
    });

    return res.status(200).json({ data: teachersBySubject });
  } catch (error) {
    console.error('find-teacher-by-subject-error', error)
  }
};

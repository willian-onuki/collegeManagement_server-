import { RequestHandler } from 'express';
import { where } from 'sequelize';
import { Classroom } from '../models/classroom';

interface RequestRegisterClassroom {
  name: string;
  tableCapacity: number;
  locked: boolean;
  subject: number;
  teachers: {
    value: number;
    label: string;
  }[];
  college: {
    value: number;
    label: string;
  };
  class_grade: ArrayBuffer | null;
  protocol: ArrayBuffer | null;
  image: ArrayBuffer | null;
}

export const registerClassroom: RequestHandler = async (req, res) => {
  const {
    name,
    tableCapacity,
    locked,
    subject,
    teachers,
    college,
    class_grade,
    protocol,
    image
  } = req.body as RequestRegisterClassroom;
  console.log("🚀 ~ file: classroom.ts:35 ~ constregisterClassroom:RequestHandler= ~ req.body:", req.body)

  try {
    const teachersFormatted: string[] = [];
    teachers.map(({ label }) => teachersFormatted.push(label));

    const classRoomCreated: Classroom = await Classroom.create({
      name,
      table_capacity: tableCapacity,
      locked,
      subject_id: subject,
      college_id: college.value,
      teachers: teachersFormatted,
      class_grade: class_grade || null,
      protocol: protocol || null,
      image: image || null
    });

    return res.status(200).json({ data: classRoomCreated });
  } catch (error) {
    console.error('register-classroom-error', error);
    return res.status(400).json({ message: error });
  }
};

export const getAllClassroom: RequestHandler = async (req, res) => {
  try {
    const allClassroom: Classroom[] = await Classroom.findAll();

    return res.status(200).json({ data: allClassroom });
  } catch (error) {
    console.error('get-all-classroom-error', error);
    return res.status(400).json({ message: error });
  }
};

export const lockClassroom: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await Classroom.update({ ...data }, { where: { id } });

    const resultLockClassroom: Classroom | null = await Classroom.findByPk(id);

    return res.status(200).json({ data: resultLockClassroom });
  } catch (error) {
    console.error('lock-classroom-error', error);
    return res.status(400).json({ message: error });
  }
};

export const updateClassroom: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const {
    name,
    tableCapacity,
    locked,
    subject,
    teachers,
    college,
    class_grade,
    protocol,
    image,
  } = req.body as RequestRegisterClassroom;
  console.log("🚀 ~ file: classroom.ts:99 ~ constupdateClassroom:RequestHandler= ~ req.body:", req.body)

  const teachersFormatted: string[] = [];
  teachers.map(({ label }) => teachersFormatted.push(label));

  try {
    await Classroom.update(
      {
        name,
        table_capacity: tableCapacity,
        locked,
        subject_id: subject,
        college_id: college.value,
        teachers: teachersFormatted,
        class_grade: class_grade || null,
        protocol: protocol || null,
        image: image || null,
      },
      { where: { id } }
    );

    const updatedClassroom: Classroom | null = await Classroom.findByPk(id);

    return res.status(200).json({ data: updatedClassroom });
  } catch (error) {
    console.error('update-classroom-error', error);
    return res.status(400).json({ message: error });
  }
};

export const deleteClassroom: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await Classroom.destroy({ where: { id } });
  } catch (error) {
    console.error('delete-classroom-error', error);
    return res.status(400).json({ message: error });
  }
};

import { Router } from "express";
import { verifyToken } from "../controller/helpers/user";
import { findTeacherBySubjectId, getAllTeacher } from "../controller/teacher";

const teacherRoutes = Router();

teacherRoutes.get('/', verifyToken, getAllTeacher);

teacherRoutes.get('/:subject_id', verifyToken, findTeacherBySubjectId);

export { teacherRoutes };

import { Router } from 'express';
import { verifyToken } from '../controller/helpers/user';
import { getAllSubject, getSubjectById } from '../controller/subject';

const subjectRoutes = Router();

subjectRoutes.get('/', verifyToken, getAllSubject);
subjectRoutes.get('/:id', verifyToken, getSubjectById);

export { subjectRoutes };

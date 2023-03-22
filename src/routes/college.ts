import { Router } from "express";

import {
  registerCollege,
  getAllCollege,
  getByIdCollege
} from '../controller/college'
import { verifyToken } from "../controller/helpers/user";

const collegeRoutes = Router();

collegeRoutes.post('/', verifyToken, registerCollege);

collegeRoutes.get('/', verifyToken, getAllCollege);

collegeRoutes.get('/:id', verifyToken, getByIdCollege);

export { collegeRoutes };

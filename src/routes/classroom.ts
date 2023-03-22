import { Router } from "express";
import { deleteClassroom, getAllClassroom, lockClassroom, registerClassroom, updateClassroom } from "../controller/classroom";
import { verifyToken } from "../controller/helpers/user";
const classroomRoutes = Router();

classroomRoutes.post('/', verifyToken, registerClassroom);
classroomRoutes.get('/', verifyToken, getAllClassroom);
classroomRoutes.post('/lock-classroom/:id', verifyToken, lockClassroom);
classroomRoutes.put('/:id', verifyToken, updateClassroom);
classroomRoutes.delete('/delete-classroom/:id', verifyToken, deleteClassroom);


export {classroomRoutes}

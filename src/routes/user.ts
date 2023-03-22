import { Router } from "express";
import { verifyToken } from "../controller/helpers/user";
import {
  userSigIn,
  userRegister,
  persistLogin
} from '../controller/user'

const userRoutes = Router();

userRoutes.post('/signin', userSigIn);

userRoutes.post('/signup', userRegister);

userRoutes.get('/verifyToken', verifyToken, persistLogin);

export {userRoutes}

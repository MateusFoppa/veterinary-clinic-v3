import { AuthController } from '../Tutor/controllers/auth.controller';
import express from 'express';
const authRouter = express.Router();

authRouter.route('/').post(AuthController.login);

export default authRouter;

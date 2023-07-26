import { AuthController } from '../Tutor/controllers/auth.controller';
import express from 'express';
const authRouter = express.Router();

const authController = new AuthController();

authRouter.route('/').post(authController.login);

export default authRouter;

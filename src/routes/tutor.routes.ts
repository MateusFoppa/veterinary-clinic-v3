import { TutorController } from '../controllers/tutor.controller';
import express from 'express';
import authentication from '../middleware/authentication';
import validator from '../middleware/validator';
import { createdTutor } from '../validation/create.tutor';


const tutorRouter = express.Router();

tutorRouter
  .route('/')
  .get(authentication, TutorController.getTutors)
  .post(validator(createdTutor.required()), TutorController.createTutor);
tutorRouter
  .route('/:tutorId')
  .put(authentication, validator(createdTutor), TutorController.updateTutor)
  .delete(authentication, TutorController.deleteTutor);

export default tutorRouter;

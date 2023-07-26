import { TutorController } from '../Tutor/controllers/tutor.controller';
import express from 'express';
import authentication from '../middleware/authentication';
import validator from '../middleware/validator';
import { createdTutor } from '../validation/create.tutor';


const tutorRouter = express.Router();

const tutorController = new TutorController;

tutorRouter
  .route('/')
  .get(authentication, tutorController.getTutors)
  .post(validator(createdTutor.required()), tutorController.createTutor);
tutorRouter
  .route('/:tutorId')
  .put(authentication, validator(createdTutor), tutorController.updateTutor)
  .delete(authentication, tutorController.deleteTutor);

export default tutorRouter;

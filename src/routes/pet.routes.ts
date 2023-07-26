import { PetController } from '../Pet/pet.controller';
import express from 'express';
import authentication from '../middleware/authentication';

import validator from '../middleware/validator';
import { createdPet } from '../validation/create.pet';


const petRouter = express.Router();

const petController = new PetController();

petRouter
  .route('/:tutorId')
  .post(authentication, validator(createdPet.required()), petController.createPet);
petRouter
  .route('/:petId/tutor/:tutorId')
  .put(authentication, validator(createdPet), petController.updatePet)
  .delete(authentication, petController.deletePet);

export default petRouter;

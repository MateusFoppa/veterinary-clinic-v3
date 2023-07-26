import { PetController } from '../Pet/pet.controller';
import express from 'express';
import authentication from '../middleware/authentication';

import validator from '../middleware/validator';
import { createdPet } from '../validation/create.pet';


const petRouter = express.Router();


petRouter
  .route('/:tutorId')
  .post(authentication, validator(createdPet.required()), PetController.createPet);
petRouter
  .route('/:petId/tutor/:tutorId')
  .put(authentication, validator(createdPet), PetController.updatePet)
  .delete(authentication, PetController.deletePet);

export default petRouter;

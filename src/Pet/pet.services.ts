import TutorRepository from '../Tutor/repositories/tutor.repository';
import { PetRepository } from './pet.repository';

import { BadRequestError } from '../errors';
import { Request } from 'express';
import { InterfacePet } from './Pet';

export class PetService {

  static async createPet(request: Request): Promise<InterfacePet> {
    const { body, params } = request;

    const { tutorId } = params;
    const tutor = await TutorRepository.findById(tutorId);
    if (!tutor) {
      throw new BadRequestError('Tutor not exist')
    }
    if (await PetRepository.findOne(body.name, params.tutorId)) {
      throw new BadRequestError('Pet name already registered');
    }

    const createdPet = await PetRepository.create(
      body
    );
    const { _id } = createdPet;

    tutor.pets.push(_id);

    await tutor.save();

    return createdPet;
  }

  static async updatePet(request: Request): Promise<InterfacePet> {
    const { body } = request;
    const { tutorId, petId } = request.params;

    const tutor = await TutorRepository.findById(tutorId);
    if (!tutor) {
      throw new BadRequestError('Tutor not exist')
    }
    const pet = await PetRepository.findById(petId);
    if (!pet) {
      throw new BadRequestError('Pet not exist')
    }
    if (!tutor.pets.find((petsId) => petsId.toString() === petId)) {
      throw new BadRequestError('Pet not associated with this tutor');
    }
    const updatedPet = await PetRepository.update(
      petId,
      body,
    );
    return updatedPet;
  }

  static async deletePet(request: Request): Promise<void> {
    const { petId, tutorId } = request.params;

    const tutor = await TutorRepository.findById(tutorId);
    if (!tutor) {
      throw new BadRequestError('Tutor not exist')
    }
    const pet = await PetRepository.findById(petId);
    if (!pet) {
      throw new BadRequestError('Pet not exist')
    }
    if (!tutor.pets.find((petsId) => petsId.toString() === petId)) {
      throw new BadRequestError('Pet not associated with this tutor');
    }
    await PetRepository.delete(petId);
    tutor.pets = tutor.pets.filter((pets) => pets.toString() !== petId);
    await tutor.save();
  }
}

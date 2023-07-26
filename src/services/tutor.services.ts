import { TutorRepository } from '../repositories/tutor.repository';
import createTokenTutor from '../utils/createTokenTutor';

import { BadRequestError } from '../errors';
import { Request } from 'express-serve-static-core';
import { createJWT } from '../utils/jwt';
import { InterfaceTutor } from '../models/Tutor';

export class TutorService {

  static async createTutor(tutorData: InterfaceTutor): Promise<object> {

    const createdTutor = await TutorRepository.create(
      tutorData
    );
    const payloadTutor = createTokenTutor(createdTutor);
    const token = createJWT(payloadTutor);

    return { tutor: payloadTutor, token };
  }
  static async getTutors(): Promise<InterfaceTutor[]> {
    const tutors = await TutorRepository.findAll();
    return tutors;
  }

  static async updateTutor(request: Request): Promise<InterfaceTutor> {
    const { tutorId } = request.params;
    const { body } = request;

    const tutor = await TutorRepository.findById(tutorId);
    if (!tutor) {
      throw new BadRequestError('Tutor not exist')
    }
    const updatedTutor = await TutorRepository.update(
      tutorId,
      body
    );
    return updatedTutor;
  }

  static async deleteTutor(request: Request): Promise<void> {
    const tutorId = request.params.tutorId;
    const tutor = await TutorRepository.findById(tutorId);
    if (!tutor) {
      throw new BadRequestError('Tutor not exist')
    }
    if (tutor.pets.length > 0) {
      throw new BadRequestError('Tutors cannot be deleted as they have associated pets');
    }
    await TutorRepository.delete(tutorId);
  }
}

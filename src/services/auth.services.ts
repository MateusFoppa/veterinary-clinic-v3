import { TutorRepository } from '../repositories/tutor.repository';
import createTokenTutor from '../utils/createTokenTutor';

import { BadRequestError, UnauthenticatedError } from '../errors';
import { createJWT } from '../utils/jwt';
import { InterfaceTutor } from '../models/Tutor';

export class AuthService {

  static async login(tutorData: InterfaceTutor): Promise<object> {

    const { email, password } = tutorData;

    if (!email || !password) {
      throw new BadRequestError('Please provide email and password');
    }

    const tutor = await TutorRepository.findOne(email);
    if (!tutor) {
      throw new UnauthenticatedError('Invalid Credentials');
    }
    const isPasswordCorrect = await tutor.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnauthenticatedError('Invalid Credentials');
    }

    const payloadTutor = createTokenTutor(tutor);
    const token = createJWT(payloadTutor);

    return { tutor: payloadTutor, token };
  }
}

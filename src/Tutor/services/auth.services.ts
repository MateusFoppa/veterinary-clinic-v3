import TutorRepository from '../repositories/tutor.repository';
import createTokenTutor from '../../Tutor/utils/createTokenTutor';

import { BadRequestError, UnauthenticatedError } from '../../errors';
import { createJWT } from '../../Tutor/utils/jwt';

export class AuthService {
  tutorRepository = TutorRepository;

  async login(tutorData: any) {

    const { email, password } = tutorData;

    if (!email || !password) {
      throw new BadRequestError('Please provide email and password');
    }

    const tutor = await this.tutorRepository.findOne(email);
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

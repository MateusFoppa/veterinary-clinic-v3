import { BadRequestError } from '../../errors';
import petRepository from '../../Pet/pet.repository';
import tutorRepository from '../repositories/tutor.repository';
import createTokenTutor from '../utils/createTokenTutor';
import { createJWT } from '../utils/jwt';

export class TutorService {
  tutorRepository = tutorRepository;
  petRepository = petRepository;

  async createTutor(tutorData: any): Promise<any> {
    const { name, password, phone, email, date_of_birth, zip_code } = tutorData;
    const createdTutor = await this.tutorRepository.create(
      name,
      password,
      phone,
      email,
      date_of_birth,
      zip_code
    );
    const payloadTutor = createTokenTutor(createdTutor);
    const token = createJWT(payloadTutor);

    return { tutor: payloadTutor, token };
  }
  async getTutors(): Promise<any[]> {
    const tutors = await this.tutorRepository.findAll();
    return tutors;
  }

  async updateTutor(tutorId: string, updatedTutorData: any): Promise<any> {
    const tutor = await this.tutorRepository.findById(tutorId);
    if (!tutor) {
      throw new BadRequestError('Tutor not exist')
    }
    const updatedTutor = await this.tutorRepository.update(
      tutorId,
      updatedTutorData
    );
    return updatedTutor;
  }

  async deleteTutor(tutorId: string) {
    const tutor = await this.tutorRepository.findById(tutorId);
    if (!tutor) {
      throw new BadRequestError('Tutor not exist')
    }
    if (tutor.pets.length > 0) {
      throw new BadRequestError('Tutors cannot be deleted as they have associated pets');
    }
    await this.tutorRepository.delete(tutorId);
  }
}

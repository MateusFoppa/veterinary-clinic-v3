import { BadRequestError } from '../../errors';
import { InterfaceTutor, Tutor } from '../models/Tutor';

class TutorRepository {
  async create(
    name: string,
    password: string,
    phone: string,
    email: string,
    date_of_birth: String,
    zip_code: string
  ): Promise<InterfaceTutor> {
    const tutor = {
      name,
      password,
      phone,
      email,
      date_of_birth,
      zip_code,
    };

    if (await this.findOne(email)) {
      throw new BadRequestError('Email already registered')
    }

    const newTutor = await Tutor.create(tutor);
    return newTutor;
  }

  async findAll(): Promise<InterfaceTutor[]> {
    const tutors = await Tutor.find().populate({
      path: 'pets',
      select: '-tutor'
    }).select('-password');
    return tutors;
  }

  async findOne(email: any) {

    const tutor = await Tutor.findOne({ email });

    return tutor;
  }

  async findById(tutorId: any) {

    const tutor = await Tutor.findById({ _id: tutorId });

    return tutor;
  }

  async update(
    tutorId: string,
    updatedTutorData: any
  ): Promise<InterfaceTutor> {
    const updatedTutor = await Tutor.findByIdAndUpdate(
      tutorId,
      updatedTutorData,
      { new: true }
    );
    return updatedTutor;
  }

  async delete(tutorId: string): Promise<void> {
    await Tutor.findByIdAndDelete(tutorId);
  }
}

export default new TutorRepository();

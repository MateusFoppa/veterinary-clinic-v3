import { BadRequestError } from '../../errors';
import { InterfaceTutor, Tutor } from '../models/Tutor';

class TutorRepository {
  async create(
    tutorData: InterfaceTutor
  ): Promise<InterfaceTutor> {

    if (await this.findOne(tutorData.email)) {
      throw new BadRequestError('Email already registered')
    }

    const newTutor = await Tutor.create(tutorData);
    return newTutor;
  }

  async findAll(): Promise<InterfaceTutor[]> {
    const tutors = await Tutor.find().populate({
      path: 'pets',
      select: '-tutor'
    }).select('-password');
    return tutors;
  }

  async findOne(email: any): Promise<InterfaceTutor> {

    const tutor = await Tutor.findOne({ email });

    return tutor;
  }

  async findById(tutorId: any): Promise<InterfaceTutor> {

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

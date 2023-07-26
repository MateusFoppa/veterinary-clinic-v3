import { BadRequestError } from '../../errors';
import { InterfaceTutor, Tutor } from '../models/Tutor';

export class TutorRepository {
  static async create(
    tutorData: InterfaceTutor
  ): Promise<InterfaceTutor> {

    if (await this.findOne(tutorData.email)) {
      throw new BadRequestError('Email already registered')
    }

    const newTutor = await Tutor.create(tutorData);
    return newTutor;
  }

  static async findAll(): Promise<InterfaceTutor[]> {
    const tutors = await Tutor.find().populate({
      path: 'pets',
      select: '-tutor'
    }).select('-password');
    return tutors;
  }

  static async findOne(email: string): Promise<InterfaceTutor> {

    const tutor = await Tutor.findOne({ email });

    return tutor;
  }

  static async findById(tutorId: string): Promise<InterfaceTutor> {

    const tutor = await Tutor.findById({ _id: tutorId });

    return tutor;
  }

  static async update(
    tutorId: string,
    updatedTutorData: InterfaceTutor
  ): Promise<InterfaceTutor> {
    const updatedTutor = await Tutor.findByIdAndUpdate(
      tutorId,
      updatedTutorData,
      { new: true }
    );
    return updatedTutor;
  }

  static async delete(tutorId: string): Promise<void> {
    await Tutor.findByIdAndDelete(tutorId);
  }
}


import TutorRepository from '../Tutor/repositories/tutor.repository';
import PetRepository from './pet.repository';
import { BadRequestError } from '../errors';

export class PetService {
  petRepository = PetRepository;
  tutorRepository = TutorRepository;

  async createPet(petData: any, params: any): Promise<any> {
    const {
      name,
      species,
      carry,
      weight,
      date_of_birth
    } = petData;
    const { tutorId } = params;
    const tutor = await this.tutorRepository.findById(tutorId);
    if (!tutor) {
      throw new BadRequestError('Tutor not exist')
    }
    if (await this.petRepository.findOne(name, tutorId)) {
      throw new BadRequestError('Pet name already registered');
    }

    const createdPet = await this.petRepository.create(
      name,
      species,
      carry,
      weight,
      date_of_birth,
      tutorId
    );
    const { _id } = createdPet;

    tutor.pets.push(_id);

    await tutor.save();

    return createdPet;
  }

  async updatePet(petId: string, tutorId: string, updatedPetData: any): Promise<any> {
    // Validation
    const tutor = await this.tutorRepository.findById(tutorId);
    if (!tutor) {
      throw new BadRequestError('Tutor not exist')
    }
    const pet = await this.petRepository.findById(petId);
    if (!pet) {
      throw new BadRequestError('Pet not exist')
    }
    if (!tutor.pets.find((petsId) => petsId.toString() === petId)) {
      throw new BadRequestError('Pet not associated with this tutor');
    }
    const updatedPet = await this.petRepository.update(
      petId,
      updatedPetData,
    );
    return updatedPet;
  }

  async deletePet(petId: string, tutorId: string) {
    // Validation
    const tutor = await this.tutorRepository.findById(tutorId);
    if (!tutor) {
      throw new BadRequestError('Tutor not exist')
    }
    const pet = await this.petRepository.findById(petId);
    if (!pet) {
      throw new BadRequestError('Pet not exist')
    }
    if (!tutor.pets.find((petsId) => petsId.toString() === petId)) {
      throw new BadRequestError('Pet not associated with this tutor');
    }
    await this.petRepository.delete(petId);
    tutor.pets = tutor.pets.filter((pets) => pets.toString() !== petId);
    await tutor.save();
  }
}

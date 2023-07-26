import { InterfacePet, Pet } from './Pet';
import { ObjectId } from 'mongoose';

class PetRepository {
  async create(
    name: string,
    species: string,
    carry: string,
    weight: number,
    date_of_birth: string,
    tutor: ObjectId
  ) {
    const pet = {
      name,
      species,
      carry,
      weight,
      date_of_birth,
      tutor
    };

    const newPet = await Pet.create(pet);
    return newPet;
  }

  async findAll(): Promise<InterfacePet[]> {
    const pets = await Pet.find();
    return pets;
  }

  async findOne(name: any, tutor: ObjectId) {

    const pet = await Pet.findOne({ name, tutor });

    return pet;
  }

  async findById(petId: any) {

    const pet = await Pet.findById({ _id: petId });

    return pet;
  }

  async update(
    petId: string,
    updatedPetData: any
  ): Promise<InterfacePet> {
    const updatedPet = await Pet.findByIdAndUpdate(
      petId,
      updatedPetData,
      { new: true }
    );
    return updatedPet;
  }

  async delete(petId: string): Promise<void> {
    await Pet.findByIdAndDelete(petId);
  }
}

export default new PetRepository();

import { InterfacePet, Pet } from '../models/Pet';

export class PetRepository {
  static async create(
    body: InterfacePet
  ): Promise<InterfacePet> {
    const newPet = await Pet.create(
      body
    );
    return newPet;
  }

  static async findAll(): Promise<InterfacePet[]> {
    const pets = await Pet.find();
    return pets;
  }

  static async findOne(name: string, tutor: string): Promise<InterfacePet> {

    const pet = await Pet.findOne({ name, tutor });

    return pet;
  }

  static async findById(petId: string): Promise<InterfacePet> {

    const pet = await Pet.findById({ _id: petId });

    return pet;
  }

  static async update(
    petId: string,
    updatedPetData: InterfacePet
  ): Promise<InterfacePet> {
    const updatedPet = await Pet.findByIdAndUpdate(
      petId,
      updatedPetData,
      { new: true }
    );
    return updatedPet;
  }

  static async delete(petId: string): Promise<void> {
    await Pet.findByIdAndDelete(petId);
  }
}


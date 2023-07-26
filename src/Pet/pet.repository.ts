import { InterfacePet, Pet } from './Pet';

class PetRepository {
  async create(
    body: InterfacePet
  ): Promise<InterfacePet> {

    const newPet = await Pet.create(body);
    return newPet;
  }

  async findAll(): Promise<InterfacePet[]> {
    const pets = await Pet.find();
    return pets;
  }

  async findOne(name: string, tutor: string): Promise<InterfacePet> {

    const pet = await Pet.findOne({ name, tutor });

    return pet;
  }

  async findById(petId: string): Promise<InterfacePet> {

    const pet = await Pet.findById({ _id: petId });

    return pet;
  }

  async update(
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

  async delete(petId: string): Promise<void> {
    await Pet.findByIdAndDelete(petId);
  }
}

export default new PetRepository();

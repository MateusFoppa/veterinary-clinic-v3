import { Request, Response } from 'express';
import { PetService } from './pet.services';

export class PetController {
  async createPet(request: Request, response: Response): Promise<void> {

    const petService = new PetService;
    const result = await petService.createPet(request);
    response.status(200).json(result);
  }

  async updatePet(request: Request, response: Response): Promise<void> {

    const petService = new PetService();
    const result = await petService.updatePet(request);
    response.status(200).json(result);
  }

  async deletePet(request: Request, response: Response): Promise<void> {

    const petService = new PetService();
    const result = await petService.deletePet(request);
    response.status(204).json(result);
  }
}

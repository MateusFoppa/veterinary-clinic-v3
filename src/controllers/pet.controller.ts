import { Request, Response } from 'express';
import { PetService } from '../services/pet.services';

export class PetController {
  static async createPet(request: Request, response: Response): Promise<void> {

    const result = await PetService.createPet(request);
    response.status(200).json(result);
  }

  static async updatePet(request: Request, response: Response): Promise<void> {

    const result = await PetService.updatePet(request);
    response.status(200).json(result);
  }

  static async deletePet(request: Request, response: Response): Promise<void> {

    const result = await PetService.deletePet(request);
    response.status(204).json(result);
  }
}

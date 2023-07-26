import { Request, Response } from 'express';
import { PetService } from './pet.services';

export class PetController {
    async createPet(request: Request, response: Response): Promise<any> {
        const { body, params } = request;

        const petService = new PetService;
        const result = await petService.createPet(body, params);
        response.status(200).json(result);
    }

    async updatePet(request: Request, response: Response): Promise<any> {
        const { body } = request;
        const { tutorId, petId } = request.params;

        const petService = new PetService();
        const result = await petService.updatePet(petId, tutorId, body);
        response.status(200).json(result);
    }

    async deletePet(request: Request, response: Response): Promise<any> {
        const { petId, tutorId } = request.params;

        const petService = new PetService();
        const result = await petService.deletePet(petId, tutorId);
        response.status(204).json(result);
    }
}

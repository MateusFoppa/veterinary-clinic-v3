import { Request, Response } from 'express';
import { TutorService } from '../services/tutor.services';

export class TutorController {
  static async createTutor(request: Request, response: Response): Promise<void> {
    const { body } = request;
    const result = await TutorService.createTutor(body);
    response.status(200).json(result);
  }

  static async getTutors(request: Request, response: Response): Promise<void> {
    const result = await TutorService.getTutors();
    response.status(200).json(result);
  }

  static async updateTutor(request: Request, response: Response): Promise<void> {
    const result = await TutorService.updateTutor(request);
    response.status(200).json(result);
  }

  static async deleteTutor(request: Request, response: Response): Promise<void> {
    const result = await TutorService.deleteTutor(request);
    response.status(204).json(result);
  }
}

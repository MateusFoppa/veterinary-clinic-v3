import { Request, Response } from 'express';
import { TutorService } from '../services/tutor.services';
import { InterfaceTutor } from '../models/Tutor';
import { StatusCodes } from 'http-status-codes';

export class TutorController {
  async createTutor(request: Request, response: Response): Promise<void> {
    const { body } = request;

    const tutorService = new TutorService();
    const result = await tutorService.createTutor(body);
    response.status(200).json(result);
  }

  async getTutors(request: Request, response: Response): Promise<void> {
    const tutorService = new TutorService();
    const result = await tutorService.getTutors();
    response.status(200).json(result);
  }

  async updateTutor(request: Request, response: Response): Promise<void> {

    const tutorService = new TutorService();
    const result = await tutorService.updateTutor(request);
    response.status(200).json(result);
  }

  async deleteTutor(request: Request, response: Response): Promise<void> {

    const tutorService = new TutorService();
    const result = await tutorService.deleteTutor(request);
    response.status(204).json(result);
  }
}

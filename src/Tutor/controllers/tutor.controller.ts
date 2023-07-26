import { Request, Response } from 'express';
import { TutorService } from '../services/tutor.services';

export class TutorController {
  async createTutor(request: Request, response: Response): Promise<any> {
    const { body } = request;

    const tutorService = new TutorService();
    const result = await tutorService.createTutor(body);
    response.status(200).json(result);
  }

  async getTutors(request: Request, response: Response): Promise<any> {
    const tutorService = new TutorService();
    const result = await tutorService.getTutors();
    response.status(200).json(result);
  }

  async updateTutor(request: Request, response: Response): Promise<any> {
    const { body, params } = request;
    const tutorId = params.tutorId;

    const tutorService = new TutorService();
    const result = await tutorService.updateTutor(tutorId, body);
    response.status(200).json(result);
  }

  async deleteTutor(request: Request, response: Response): Promise<any> {
    const tutorId = request.params.tutorId;

    const tutorService = new TutorService();
    const result = await tutorService.deleteTutor(tutorId);
    response.status(204).json(result);
  }
}

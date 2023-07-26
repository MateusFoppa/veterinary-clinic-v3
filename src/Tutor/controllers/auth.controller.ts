import { Request, Response } from 'express';
import { AuthService } from '../../Tutor/services/auth.services';

export class AuthController {
  static async login(request: Request, response: Response): Promise<void> {
    const { body } = request;

    const result = await AuthService.login(body);
    response.status(200).json(result);
  }
}

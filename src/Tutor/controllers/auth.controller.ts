import { Request, Response } from 'express';
import { AuthService } from '../../Tutor/services/auth.services';

export class AuthController {
  async login(request: Request, response: Response): Promise<any> {
    const { body } = request;
    const authService = new AuthService();
    const result = await authService.login(body);
    response.status(200).json(result);
  }
}

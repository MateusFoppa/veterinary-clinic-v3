import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../errors'
import { NextFunction, Request, Response } from 'express';

const authentication = async (req, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError('Authentication invalid')
    }
    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.tutor = { tutorId: payload.tutorId };
        next();
    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid');
    }
};

export = authentication;

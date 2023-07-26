import jwt, { Secret } from 'jsonwebtoken';

interface TutorPayload {
    tutorId: string;
    email: string;
}

const createJWT = (payload: TutorPayload): string => {
    const token = jwt.sign(payload, process.env.JWT_SECRET as Secret, {
        expiresIn: process.env.JWT_LIFETIME,
    });
    return token;
};

const isTokenValid = (token: string): TutorPayload => jwt.verify(token, process.env.JWT_SECRET as Secret) as TutorPayload;

export { createJWT, isTokenValid };

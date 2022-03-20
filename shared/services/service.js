import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const tokenGenerator = (role) => {
    return jwt.sign(role, process.env.JWT_SECRET);
}

export const tokenChecker = (token, secret) => {
    return jwt.verify(token, secret);
}

export const hasher = async (pass) => {
    try {
        const hash = await bcrypt.hash(pass, 10);
        return hash;
    } catch (error) {
        console.log(error);
    }
}

export const passChecker = async (pass, hash) => {
    return await bcrypt.compare(pass,hash);
}
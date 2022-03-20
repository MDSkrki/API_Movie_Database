import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

export const tokenGenerator = (role) => {
    return jwt.sign(role, process.env.JWT_SECRET);
}

export const tokenChecker = (token, secret) => {
    return jwt.verify(token, secret);
}

export const hasher = async (pass) => {
    const hash = await bcrypt.hash(pass, 10);
    return hash;
}

export const passChecker = async (pass, hash) => {
    return await bcrypt.compare(pass,hash);
}
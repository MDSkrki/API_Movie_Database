import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const tokenGenerator = (user) => {
    try {
        return jwt.sign(user, process.env.JWT_SECRET);
    } catch (error) {
        console.log(error);
    }
}

export const tokenChecker = (token, secret) => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        console.log(error);
    }
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
    try {
        return await bcrypt.compare(pass, hash);
    } catch (error) {
        console.log(error);
    }
}

import * as service from './service.js';
import User from './model.js';


export const authenticator = (roleToCheck) => {
    return (req, res, next) => {
        try {
            const role = service.tokenChecker(req.headers.token, 'hehe');
            if (role == roleToCheck) {
                next();
                return;
            }
            res.status(403).send('You do not have enough permissions to perform this operation.');
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
}

export const userFinder = async (req, res, next) => { // This should be the login controller
    const user = await User.findOne({
        email: req.headers.email,
        password: req.headers.password, // TODO: check by decrypted password (bcrypt.compare(plaintext, hashedPassword)) returns true/false
    });
    if (user) {
        const token = service.tokenGenerator(user.role, 'hehe');
        console.log(token);
        next();
    } else {
        res.status(401).send('User not found');
    }
}
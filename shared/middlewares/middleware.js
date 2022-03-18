import * as service from '../services/service.js'


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

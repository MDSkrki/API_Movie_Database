import * as service from '../services/service.js';


const authenticator = (roleToCheck) => {
    return (req, res, next) => {
        try {
            const role = service.tokenChecker(req.headers.token, process.env.JWT_SECRET);
            if (role == roleToCheck || role == 'admin') {
                next();
                return;
            }
            res.status(403).send('You do not have enough permissions to perform this operation.');
        } catch (error) {
            console.log(error);
            res.send(error, 'Token not valid');
        }
    }
}
export default authenticator;
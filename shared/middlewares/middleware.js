import { tokenChecker } from '../services/service.js';

const authenticator = (roleToCheck) => {
    return (req, res, next) => {
        try {
            const user = tokenChecker(req.headers.token, process.env.JWT_SECRET);
            if (user.role == roleToCheck || user.role == 'admin') {
                next();
                return;
            }
            res.status(403).send('You are not authorised to perform this operation.');
        } catch (error) {
            console.log(error);
            res.send(error, 'Token not valid');
        }
    }
}
export default authenticator;
import * as service from './service.js'


export const authenticator = (req, res, next) => {
    try {
        console.log(service.tokenChecker(req.headers.token, 'hehe'));
        next();
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
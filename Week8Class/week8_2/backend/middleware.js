const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('./config');

function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1];

    const decodedToken = jwt.verify(jwtToken, JWT_SECRET);

    if (decodedToken.username) {
        req.username = decodedToken.username;
        next();
    }

    res.status(403).json({message: 'You are not authenticated.'});
}

module.exports = authMiddleware;

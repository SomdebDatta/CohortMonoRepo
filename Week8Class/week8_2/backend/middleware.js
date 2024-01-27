const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('./config');

function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(403).json({message: 'You are not authenticated.'});
    }
    
    const jwtToken = token.split(' ')[1];

    

    try {
        const decodedToken = jwt.verify(jwtToken, JWT_SECRET);
        req.userId = decodedToken.userId;
        next();
    } catch(err) {
        return res.status(403).json({message: 'You are not authenticated.'});
    }
}

module.exports = { authMiddleware };

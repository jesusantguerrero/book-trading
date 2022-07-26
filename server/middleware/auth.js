const jwt = require('jsonwebtoken');

module.exports.verifyToken = (req, res, next) => {
    const token = req.headers['Authentication']

    if (!token) {
        return res.status(403).send('Not authorized')
    }

    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded
    } catch (err) {
        return res.status('401').send('invalid token')
    }
    return next()
}
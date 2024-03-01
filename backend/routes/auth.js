
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }

        // หาก Token ถูกต้อง ให้เก็บข้อมูลผู้ใช้ใน req.user
        req.user = decoded;
        console.log(decoded)
        next();
    });
};

module.exports = verifyToken;
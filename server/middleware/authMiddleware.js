import jwt from 'jsonwebtoken';
import { query } from '../config/db.js';

const protect = async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
            const result = await query('SELECT * FROM Users WHERE id = $1', [decoded.userId]);
        
            if (!result.rows.length) {
                return res.status(401).json({ message: 'Not authorized, user not found' });
            }
        
            req.user = result.rows[0];
            next();
        } catch (error) {
            console.error("Error in protect middleware:", error);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};


export { protect };

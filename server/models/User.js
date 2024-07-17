import {query} from '../config/db.js';
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken';

const createUser = async (userData) => {
    const { name, email, password } = userData;

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await query(
        'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING email, password_hash',
        [name, email, hashedPassword]
    );
    
    return { email: result.rows[0].email, hashedPassword: result.rows[0].password_hash };
};

const loginUser = async (userData) => {
    const { email, password } = userData;

    const result = await query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (user && await bcrypt.compare(password, user.password_hash)) {
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return {token };
    } else {
        throw new Error('Invalid credentials');
    }
}

export {createUser, loginUser};
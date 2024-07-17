
import {createUser, loginUser} from '../models/User.js';

const register = async (req, res) => {
    try {
        const { email, hashedPassword } = await createUser(req.body);
        res.status(201).json({ message: 'User registered successfully', user: { email, hashedPassword } });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const {token } = await loginUser(req.body);
        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Error logging in', error: error.message }); 
    }
};

export { register, login};


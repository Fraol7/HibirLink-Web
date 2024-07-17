import { query } from '../config/db.js';

const create = async (userId, productId, quantity) => {
    const queryText = 'INSERT INTO CartItems (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *';
    try {
        const result = await query(queryText, [userId, productId, quantity]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const getByUserId= async (userId) => {
        const queryText = 'SELECT ci.*, p.name AS product_name, p.price AS product_price FROM CartItems ci INNER JOIN Products p ON ci.product_id = p.id WHERE ci.user_id = $1';
        try {
            const result = await query(queryText, [userId]);
            return result.rows;
        } catch (error) {
            throw error;
        }
    };

   
const updateQuantity = async (cartItemId, quantity) => {
        const queryText = 'UPDATE CartItems SET quantity = $1 WHERE id = $2 RETURNING *';
        try {
            const result = await query(queryText, [quantity, cartItemId]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    };

const deleteCartItem = async (cartItemId) => {
        const queryText = 'DELETE FROM CartItems WHERE id = $1 RETURNING *';
        try {
            const result = await query(queryText, [cartItemId]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }; 

const getCartSummaryByUserId = async (userId) => {
    const queryText = `
        SELECT ci.*, p.name AS product_name, p.price AS product_price 
        FROM CartItems ci 
        INNER JOIN Products p ON ci.product_id = p.id 
        WHERE ci.user_id = $1
    `;
    try {
        const result = await query(queryText, [userId]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

export {create, getByUserId, updateQuantity, deleteCartItem, getCartSummaryByUserId};

import { query } from '../config/db.js';

const BillingAddress = {
    createBillingAddress: async (userId, billingAddressData) => {
        const { recipient_name, street_address, apartment_floor, town_city, phone_number, payment_method } = billingAddressData;
        const userQueryText = 'SELECT name, email FROM Users WHERE id = $1';
        const userResult = await query(userQueryText, [userId]);
        if (userResult.rows.length === 0) {
            throw new Error('User not found');
        }
        const { name, email } = userResult.rows[0];

        const queryText = `
            INSERT INTO BillingAddresses (user_id, recipient_name, street_address, apartment_floor, town_city, phone_number, payment_method) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
        const values = [userId, recipient_name, street_address, apartment_floor, town_city, phone_number, payment_method];
        try {
            const result = await query(queryText, values);
            return { ...result.rows[0], name, email };
        } catch (error) {
            throw error;
        }
    },

    getBillingAddressByUserId: async (userId) => {
        const userQueryText = 'SELECT name, email FROM Users WHERE id = $1';
        const userResult = await query(userQueryText, [userId]);
        if (userResult.rows.length === 0) {
            throw new Error('User not found');
        }
        const { name, email } = userResult.rows[0];

        const queryText = 'SELECT * FROM BillingAddresses WHERE user_id = $1';
        try {
            const result = await query(queryText, [userId]);
            return { ...result.rows[0], name, email };
        } catch (error) {
            throw error;
        }
    },

    updateBillingAddress: async (billingAddressData) => {
        const { id, user_id, recipient_name, street_address, apartment_floor, town_city, phone_number, payment_method } = billingAddressData;
        const queryText = `
            UPDATE BillingAddresses 
            SET recipient_name = $2, street_address = $3, apartment_floor = $4, town_city = $5, phone_number = $6, payment_method = $7
            WHERE id = $1 AND user_id = $8 RETURNING *`;
        const values = [id, recipient_name, street_address, apartment_floor, town_city, phone_number, payment_method, user_id];
        try {
            const result = await query(queryText, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },

    deleteBillingAddress: async (id, userId) => {
        const queryText = 'DELETE FROM BillingAddresses WHERE id = $1 AND user_id = $2 RETURNING *';
        try {
            const result = await query(queryText, [id, userId]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
};

export default BillingAddress;

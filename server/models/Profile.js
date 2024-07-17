import { query, startTransaction, commitTransaction, rollbackTransaction } from '../config/db.js';

const createProfile = async (profileData) => {
    const { user_id, gender, country, phone_number, language, additional_email } = profileData;
    const result = await query(
        'INSERT INTO Profiles (user_id, gender, country, phone_number, language, additional_email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [user_id, gender, country, phone_number, language, additional_email]
    );
    return result.rows[0];
};

const getProfileByUserId = async (user_id) => {
    console.log(`user_id run`, user_id);
    const result = await query(
        'SELECT * FROM Profiles WHERE user_id = $1',
        [user_id]
    );
    return result.rows[0];
};

const updateProfileById = async ({ user_id, profileData }) => {
    try{
    const { gender, country, phone_number, language, additional_email } = profileData;
    let client;
    client = await startTransaction();
    const result = await query(
        'UPDATE Profiles SET gender = $1, country = $2, phone_number = $3, language = $4, additional_email = $5 WHERE user_id = $6 RETURNING *',
        [gender, country, phone_number, language, additional_email, user_id]
    );

    await commitTransaction(client);
    return result.rows[0];
    }
    catch(error){
        await rollbackTransaction(client);
        throw error;
    }
};

export { createProfile, getProfileByUserId, updateProfileById };

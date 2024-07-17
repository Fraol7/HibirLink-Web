import { createProfile, getProfileByUserId, updateProfileById } from '../models/Profile.js';

const create = async (req, res) => {
    try {
        const profile = await createProfile({user_id: req.user.id, ...req.body });
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProfile = async (req, res) => {
    try {
        const profile = await getProfileByUserId(req.user.id); 
        console.log(`in profile controller`, req.user.id);
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProfile = async (req, res) => {
    try {
        const profile = await updateProfileById({user_id: req.user.id, profileData : req.body}); 
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {create, getProfile, updateProfile };

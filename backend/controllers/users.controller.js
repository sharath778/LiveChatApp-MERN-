import { SignUpUserModel } from "../models/signUpDataSchema.model.js";

export const getUsers = async (req, res)=>{
    try {
        const loggedInUserId = req.user._id;
        const filteredusers = await SignUpUserModel.find({_id: {$ne: loggedInUserId}}).select("-password");
        return res.status(200).send(filteredusers);

    } catch (error) {
        console.error("Error in getUser: ", error.message);
        return res.status(500).send({error:"Internal Server error!"});
    }
};
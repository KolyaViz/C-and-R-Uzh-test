import User from "../models/user.js";

export async function getAllUsers(req, res, next){
    const users = await User.find({});
    res.status(200).json({
        message: "Get all users",
        users
    })
}
export async function getUserById(req, res, next){
    const {userId} = req.params;
    const user = await User.findById(userId)
    res.status(200).json({
        message: "find user by id",
        user
    })
}
export async function addNewUser(req, res, next){
    const {name, email} = req.body;
    const user = User({name, email});
    const result = user.save();
    res.status(200).json({
        message: "created product successfully",
        result
    })
}
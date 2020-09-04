import mongoose from "mongoose";

const  userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 24
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^.+@.+\..+$/img
    }
})

const user = mongoose.model("user", userSchema);

export default user;
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 58
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    gender: {
        type: String,
        validate(value) {
            if (!["male", "female", "others"].incluedes(value)) {
                throw new Error("gender data is not valid")
            }
        },
    },
    photoUrl: {
        type: String,
        default: "This is a default photoUrl"
    },
    about: {
        type: String,
        default: "this is a default about the user!"
    },
    skills: {
        type: [String]
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)
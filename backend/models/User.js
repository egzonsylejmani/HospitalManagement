const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
    },
    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email",
        ],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [8, "Password must be at least 8 characters"],
        maxlength: [32, "Password must be at most 32 characters"],
        select: false,
    },
    role:{
        type: String,
        enum: ["admin", "doctor","receptionist"],
        default: "receptionist",

    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    
    } ,{ timestamps: true }); 


    UserSchema.pre("save", async function (next) {
        if(!this.isModified("password")){
            next();
        }

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);

        next();
    
    });

    UserSchema.methods.matchPassword = async function (password) {
        return await bcrypt.compare(password, this.password);
    }

    UserSchema.methods.getJwtToken = function () {
        return jwt.sign({ id: this._id, role: this.role, username: this.username }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        });
    }

    UserSchema.methods.getResetPasswordToken = function () {
        const resetToken = crypto.randomBytes(20).toString("hex");

        this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

        this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

        return resetToken;
        
    }



    const User = mongoose.model("User", UserSchema);


module.exports = User;
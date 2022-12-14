const mongoose = require("mongoose");
const UserRole = require("./user_role");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAccountAdmin: {
        type: Boolean,
        default: false,
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: "UserRole",
    },
});

module.exports = mongoose.model("User", userSchema);

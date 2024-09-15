const mongoose = require("mongoose")

const roleAuthSchema = new mongoose.Schema({
    roles: {
        type: String,
        required: [true, "Enter your role"],
        enum: ["admin", "vendor", "customer"],
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserAuth"
    }]
})

module.exports = mongoose.model("RoleAuth", roleAuthSchema)
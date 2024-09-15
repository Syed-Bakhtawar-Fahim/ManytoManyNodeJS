const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect(process.env.DB_URL)
    .then((response) => {
        console.log("Database Connected Sucessfully")
    })
    .catch((error) => {
        console.log(`Database Not connected due to: ${error}`)
    })
}

module.exports = connectDB;
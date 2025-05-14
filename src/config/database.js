const mongoose = require("mongoose")

const connnectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://arvindtwr6410:t7iM5QDWuBmcIcYt@techtinder.yrmwofk.mongodb.net/techTinder"
    )
};

connnectDB().then(() => {
    console.log("Database connection is estaiblished")
}).catch((err) => {
    console.log("database connot be connected")
})









// const mongoose = require("mongoose");

// const connectDB = async () => {
//     await mongoose.connect(
//         "mongodb+srv://arvindtwr6410:t7iM5QDWuBmcIcYt@techtinder.yrmwofk.mongodb.net/"
//     )
// }

// module.exports = connectDB;

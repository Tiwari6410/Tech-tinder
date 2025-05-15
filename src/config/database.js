const mongoose = require("mongoose")

const connnectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://arvindtwr6410:t7iM5QDWuBmcIcYt@techtinder.yrmwofk.mongodb.net/techTinder"
    )
};

module.exports = connnectDB









// const mongoose = require("mongoose");

// const connectDB = async () => {
//     await mongoose.connect(
//         "mongodb+srv://arvindtwr6410:t7iM5QDWuBmcIcYt@techtinder.yrmwofk.mongodb.net/"
//     )
// }

// module.exports = connectDB;

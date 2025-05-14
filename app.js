const express = require("express")
require("./src/config/database");
const app = express();

app.listen(7777, () => {
    console.log("server is successfully listen to port 7777")
})







// const express = require("express");
// const connectDB = require("./src/config/database")
// const app = express();


// connectDB().then(() => {
//     console.log("Database connection established....");

//     app.listen(7000, () => {
//         console.log("Server is successfully running")
//     })
// }).catch((err) => {
//     console.log("Database cannot be connected")
// })


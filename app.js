const express = require("express")
const connectDB = require("./src/config/database");
const app = express();
const User = require("./src/models/user")

app.post("/signup", async (req, res) => {



    const Userdata = new User({
        firstName: "Arvind",
        lastName: "tiwari",
        email: "arvind@gmail.com",
        password: "arvind@123",

    })

    try {
        await Userdata.save()
        res.send("user data added successfully ")
    } catch (err) {
        res.status(400).send("Error saving the User:", err.message)
    }
})


connectDB().then(() => {
    console.log("Database connection is estaiblished")
    app.listen(7777, () => {
        console.log("server is successfully listen to port 7777")
    })
}).catch((err) => {
    console.log("database connot be connected")
})







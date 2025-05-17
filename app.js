const express = require("express")
const connectDB = require("./src/config/database");
const app = express();
const User = require("./src/models/user")

app.use(express.json())
app.post("/signup", async (req, res) => {
    // console.log(req.body)


    const Userdata = new User(req.body)

    try {
        await Userdata.save()
        res.send("user data added successfully ")
    } catch (err) {
        res.status(400).send("Error saving the User:", err.message)
    }
})

app.get("/user", async (req, res) => {
    const userEmail = req.body.email

    try {
        const users = await User.find({
            email: userEmail
        })
        if (users.length === 0) {
            res.status(404).send("User not found")
        } else {
            res.send(users)
        }
    } catch (err) {
        res.status(404).send("Something went wrong")
    }
})

app.get("/feed", async (req, res) => {
    try {
        const user = await User.find({})
        if (user.length === 0) {
            res.status(404).send("Database is fully empty ")
        } else {

            res.send(user)
        }
    } catch (err) {
        res.status(400).send("something wend wrong")
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







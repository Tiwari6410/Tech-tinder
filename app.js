const express = require("express")
const connectDB = require("./src/config/database");
const app = express();
const User = require("./src/models/user");
const { ReturnDocument } = require("mongodb");

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

app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    console.log(userId, "arvindid")
    try {
        // const user = await User.findByIdAndDelete({ _id: userId })
        const user = await User.findByIdAndDelete(userId)
        console.log(user, "user data ")
        res.send("delete successfully")

    } catch (err) {
        res.status(404).send("something went wrong in Api ")
    }
})

app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    // const { userId, ...updates } = req.body;

    // console.log(req.body, "this is a whole object")
    // console.log(updates, "this is a whole object")


    try {
        const ALLOWED_UPDATES = ["userId", "photoUrl", "about", "gender", "age", "skills", "emailId"]
        // const ALLOWED_UPDATES = ["firstName", "lastName", "age", "skills"]
        const isUpdatesAllowed = Object.keys(data).every((k) => ALLOWED_UPDATES.includes(k))
        console.log(isUpdatesAllowed, "isupdatedAllowed")
        if (!isUpdatesAllowed) {
            throw new Error("Update not allowed")
        }
        if (data?.skills.length > 10) {
            throw new Error("Skills cannot be more than 10")
            console.log(data?.skills.length, "skills length")
        }
        const user = await User.findByIdAndUpdate({ _id: userId }, data, {
            returnDocument: "after",
            // new: true,
            runValidators: true
        })
        // const user = await User.findByIdAndUpdate({ userId }, data)
        console.log(user, "Printed value")
        res.send("data updated successfully")
    } catch (err) {
        res.status(404).send("UPDATE FAILED" + err.message)
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







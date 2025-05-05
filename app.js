const express = require("express");
const { authAdmin } = require("./src/middleware/auth");
const { userAuth } = require("./src/middleware/auth");
const app = express();




app.use("/admin", authAdmin);

app.get("/user", userAuth, (req, res) => {
    res.send("user data sent successfully")
})

app.get("/admin/contact", (req, res) => {
    res.send("All contact has been sented out")
})

app.get("/admin/getAllData", (req, res) => {
    res.send("All data Send");
})


app.post("/user/login", (req, res) => {
    res.send("User logged in successfully")
})






app.listen(7000, () => {
    console.log("Server is successfully running")
})
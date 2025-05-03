const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Hy i am from home page ")
})
app.use("/test", (req, res) => {
    res.send("Hy i am from Test page ")
})
app.use("/contact", (req, res) => {
    res.send("Hy i am from contact page ")
})

app.listen(7000, () => {
    console.log("Server is successfully running")
})
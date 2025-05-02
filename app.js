const express = require("express")
const app = express();

app.use("/", (req, res) => {
    res.send("Hy i am from home page ")
})
// app.get("/test", (req, res) => {
//     res.send("Hy i am from Test page ")
// })

app.listen(7000, () => {
    console.log("Server is successfully running")
})
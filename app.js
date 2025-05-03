const express = require("express")
const app = express();

app.get("/user", (req, res) => {
    res.send({ firstName: "Arvind", lastName: "Tiwari" })
})

app.post("/user", (req, res) => {
    res.send("Post Api successfully Calling...")
})
app.delete("/user", (req, res) => {
    res.send("user Data deleted successfully ")
})
app.patch("/user", (req, res) => {
    res.send("user Patch Api successfully ")
})

app.listen(7000, () => {
    console.log("Server is successfully running")
})
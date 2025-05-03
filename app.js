const express = require("express")
const app = express();


app.get("/user", (req, res, next) => {
    console.log("Route 1 running")
    next()
    // res.send("router1 successfully running ")
}, (req, res, next) => {
    console.log("router 2 running")
    // res.send("router2 successfully running")
    next()
}, (req, res, next) => {
    console.log("rounter3rd running")
    next()
    // res.send({ first: "Arvind", last: "tiwari" })
}, (req, res) => {
    console.log("4th route handler running")
    res.send("Route 4th handler successfully running")
})




app.listen(7000, () => {
    console.log("Server is successfully running")
})
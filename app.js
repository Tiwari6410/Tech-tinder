const express = require("express")
const app = express();
//sending query from url

//URL : localhost:7000/user?userId=45645
// app.get("/user", (req, res) => {
//     console.log(req.query)
//     res.send({ firstName: "Arvind", lastName: "Tiwari" })
// })


//sending params through url

//URL : localhost:7000/user/6054/arvind/989898999
app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params)
    res.send({ firstName: "Arvind", lastName: "Tiwari" })
})




app.listen(7000, () => {
    console.log("Server is successfully running")
})
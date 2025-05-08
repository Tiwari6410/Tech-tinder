const authAdmin = (req, res, next) => {
    const token = "xyz";
    const authAdmin = token === "xyz";
    if (!authAdmin) {
        res.status(401).send("unAutherized admin has been found")
    } else {
        next()
        // res.send("superman............................")
    }

}

const userAuth = (req, res, next) => {
    const token = "xyz";
    const authAdmin = token === "xyz";
    if (!authAdmin) {
        res.status(401).send("unAutherized user has been found")
    } else {
        console.log("userAuth getting authenticate")
        next()
    }

}

module.exports = {
    authAdmin,
    userAuth
}
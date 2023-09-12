const express = require("express")
const router = express.Router()

router.get("/profile", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login")
    }

    const { first_name, last_name, email, age } = req.session.user
    res.render("profile", { first_name, last_name, email, age })
})

module.exports = router
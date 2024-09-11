const User = require("../schema.js");

const InsertUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({
        name,
        email,
        password
    });
    await user.save();
    res.send("User created successfully.")
}

module.exports = InsertUser
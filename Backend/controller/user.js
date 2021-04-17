const { body, validationResult } = require('express-validator');


const User = require("../model/user")
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" })
    }

    try {
        const chechUser = await User.findOne({ email });
        if (chechUser) {
            return res.status(400).json({ error: "Email is already exsists" })
        }
        // hash
        const hash = await bcrypt.hash(password, (10));
        try {
            const user = User.create({
                name,
                email,
                password: hash
            })
            const token = jwt.sign({ user }, process.env.SECRETE, { expiresIn: '7d' })
            return res.status(201).json({ success: "Created Success", token })

        } catch (error) {

            return res.status(400).json({ error: error })
        }


    } catch (error) {
        return res.status(400).json({ error: error })
    }
}


module.exports.loginValidation = [
    body('email').not().isEmpty().withMessage("Email is required"),
    body('password').isLength({ min: 6 }).withMessage("Password must be 6 charactors"),

];

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

}
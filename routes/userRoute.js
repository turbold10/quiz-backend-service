const { Router } = require('express')
const { createUser, loginUser } = require('../controller/userController');
const userModel = require('../database/schema/userModel');
const userRoute = Router();

const validataEmail = async (req, res, next) => {
    const userData = req.body
    const user = await userModel.findOne({ email: userData.email })
    if (!user) {
        next()
    } else {
        res.status(403).send({ message: 'email is already taken' })
    }
}

userRoute.post('/signup', validataEmail, createUser)
userRoute.post('/login', loginUser)

module.exports = userRoute
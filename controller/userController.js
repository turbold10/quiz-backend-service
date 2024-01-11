const userModel = require("../database/schema/userModel")
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    const userData = req.body
    console.log(userData)
    const saltRounds = 10;
    const password = userData.password
    const hash = bcrypt.hashSync(password, saltRounds)
    console.log('password ==>', password)
    console.log('hashedPassword ==>', hash)
    const data = { ...userData, password: hash }
    try {
        await userModel.create(data)
        res.status(200).send({ message: 'user created' })
    } catch (error) {
        res.status(500).send(error)
    }
}


const loginUser = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    try {
        const user = await userModel.findOne({ email: email })
        const hashedPassword = user.password
        const isUser = bcrypt.compareSync(password, hashedPassword)
        if (isUser) {
            res.status(200).send({ message: "amjilttai nevterlee" })
        } else {
            res.status(404).send({ message: "check password or email" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { createUser, loginUser }
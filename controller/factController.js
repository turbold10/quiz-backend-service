const factModel = require("../database/schema/factModel")

const createFact = async (req, res) => {
    const body = req.body
    try {
        const fact = await factModel.create(body)
        res.status(200).send(fact)
    } catch (e) {
        console.log(e)
    }
}

const getFacts = async (req, res) => {
    try {
        const fact = await factModel.find({})
        res.status(200).send(fact)
    } catch (error) {
        console.log(error)
    }
}

const getFact = async (req, res) => {

}

const deleteFact = async (req, res) => {
    const factId = req.params.factId
    try {
        const result = await factModel.findByIdAndDelete(factId)
        console.log(result)
        res.status(200).send(`${result._id} amjilttai ustlaa`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createFact, getFacts, getFact, deleteFact }
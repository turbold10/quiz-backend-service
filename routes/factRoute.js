const { Router } = require('express')
const { createFact, getFacts, getFact, deleteFact } = require('../controller/factController')
const factRoute = Router()

factRoute.post('/facts', createFact)
factRoute.get('/facts', getFacts)
factRoute.get('/facts/:userId', getFact)
factRoute.delete('/facts/:factId', deleteFact)

module.exports = factRoute
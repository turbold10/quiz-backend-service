const { mongoose, Schema } = require('mongoose')

const factSchema = new Schema({
    date: { type: Date, default: Date.now() },
    UserId: String,
    fact: String,
    factTitle: String,
    likes: {type: Array, default:[]},
    dislikes: {type: Array, default:[]},

})

const factModel = mongoose.model('posts', factSchema)

module.exports = factModel
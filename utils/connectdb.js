const mongoose = require('mongoose')

const connectDatabase = async () => {
    res = await mongoose.connect('mongodb+srv://turbold:kb082495@cluster0.ckmxola.mongodb.net/')
    if (res) console.log('db connected')
}

module.exports = connectDatabase
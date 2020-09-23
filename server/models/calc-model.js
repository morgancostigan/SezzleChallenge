const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Calcs = new Schema(
    {
        calcs: [String]
    }
)

module.exports = mongoose.model('calcs', Calcs)
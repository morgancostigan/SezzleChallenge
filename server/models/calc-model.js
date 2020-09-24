const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Calcs = new Schema(
    {
        calcs: { type: [String], required: true }
    }
)

module.exports = mongoose.model('calcs', Calcs)
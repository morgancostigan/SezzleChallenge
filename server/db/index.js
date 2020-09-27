
const mongoose = require('mongoose')

mongoose
    // .connect('mongodb://127.0.0.1:27017/calcs', { useNewUrlParser: true })
    .connect('mongodb://localhost:27017/cal-cal-cal', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
// const connection = mongoose.connection

db.once("open", function() {
    console.log('Mongo DB connection established, and so on and so forth.');  
});

module.exports = db
// module.exports = connection
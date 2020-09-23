const Calcs = require('../models/calc-model');

createCalcs = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a calculation.',
        })
    }

    const calcs = new Calcs(body)

    if (!calcs) {
        return res.status(400).json({ success: false, error: err })
    }

    // console.log('wreck dat body:', req.body);
    // console.log("type of wreckBODYchalk:", typeof req.body.calcs)
    // console.log('loggin` calcs:', calcs);
    
    calcs
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: calc._id,
                message: 'Calculations created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Calculations not created!',
            })
        })
}

updateCalcs = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Calcs.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Calculations not found!',
            })
        }
        calcs = body.calcs
        calcs
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: calcs._id,
                    message: 'Calculations updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Calculations not updated!',
                })
            })
    })
}

getCalcs = async (req, res) => {
    await Calcs.find({}, (err, calcs) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!calcs.length) {
            return res
                .status(404)
                .json({ success: false, error: `Calculations not found` })
        }
        return res.status(200).json({ success: true, data: calcs })
    }).catch(err => console.log(err))
}

module.exports = {
    createCalcs,
    updateCalcs,
    getCalcs,
}
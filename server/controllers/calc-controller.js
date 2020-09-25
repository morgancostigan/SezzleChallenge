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

    // console.log('wreck dat body:', req.body);
    // console.log("type of wreckBODYchalk:", typeof req.body.calcs)
    // console.log('loggin` calcs:', calcs);
}//end createCalcs

// updateCalcs = async (req, res) => {
//     const body = req.body
//     console.log('BODY!!!', body);
    
//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a body to update',
//         })
//     }

//     Calcs.findOne({ _id: req.params.id }, (err, calcs) => {
//         if (err) {
//             return res.status(404).json({
//                 err,
//                 message: 'Calculations not found!',
//             })
//         }

//         calcs = body.calcs
//         console.log('I HERE!!!!!');
//         console.log('CALCS!!!!:', calcs);
//         // calcs[] = 'changed';
//         calcs.markModified('calcs');
//         // calcs.set(0, 'changed');
//         calcs
//             .save()
//             .then(() => {
//                 return res.status(200).json({
//                     success: true,
//                     id: calcs._id,
//                     message: 'Calculations updated!',
//                 })
//             })
//             .catch(error => {
//                 return res.status(404).json({
//                     error,
//                     message: 'Calculations not updated!',
//                 })
//             })
//     })
// }//end updateCalcs

updateCalcs = async (req, res) => {
    //put the calcs key here to match the schema
    const replacement = {calcs: req.body}
    const query = req.params.id;
    const options = { "returnNewDocument": true };
    let updatedDocument;

    console.log('BODY!!!', replacement);
    console.log('PARAMS!!!', req.params);
    
    if (!replacement) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Calcs.findOneAndReplace(query, replacement, options)
        .then(replacedDocument => {
            if (replacedDocument) {
                console.log(`Successfully replaced the following document: ${replacedDocument}.`)
            } else {
                console.log("No document matches the provided query.")
            }
            return updatedDocument            
        })
        .catch(err => console.error(`Failed to find and replace document: ${err}`)
    )
    
}//end updateCalcs

getCalcsById = async (req, res) => {
    await Calcs.findOne({ _id: req.params.id }, (err, calcs) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!calcs) {
            return res
                .status(404)
                .json({ success: false, error: `Calculations not found` })
        }
        return res.status(200).json({ success: true, data: calcs })
    }).catch(err => console.log(err))
}//end getCalcsById

module.exports = {
    createCalcs,
    updateCalcs,
    getCalcsById,
}
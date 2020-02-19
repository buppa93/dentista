const Patience = require('../models/patience-model');

createPatience = (req, res) => {
    const body = req.body;

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a patience',
        })
    }

    const patience = new Patience(body);

    if(!patience) {
        return res.status(400).json({
            success: false,
            error: 'Error'
        });
    }

    patience.save().then(() => {
        return res.status(201).json({
            success: true,
            entity: patience,
            message: 'Patience created'
        })
    }).catch( error => {
        return res.status(400).json({
            error,
            message: 'Patience not created'
        })
    })
}

getPatiences = async (req, res) => {
    await Patience.find({}, (err, patiences) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        if (!patiences.length) {
            return res
                .status(404)
                .json({
                    success: false,
                    error: `Patience not found`
                })
        }
        return res.status(200).json({
            success: true,
            data: patiences
        })
    }).catch(err => console.log(err))
}

updatePatience = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Patience.findOne({ _id: req.params._id }, (err, patience) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Patience not found!',
            })
        }
        patience.name = body.name;
        patience.surname = body.surname;
        patience.fiscalCode = body.fiscalCode;
        patience.email = body.email;
        patience.phoneNumber = body.phoneNumber;
        patience.save().then(() => {
                return res.status(200).json({
                    success: true,
                    entity: patience,
                    message: 'Patience updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Patience not updated!',
                })
            })
    })
}

deletePatience = async (req, res) => {
    await Patience.findOneAndDelete({ _id: req.params._id }, (err, patience) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if (!patience) {
            return res
                .status(404)
                .json({
                    success: false,
                    error: `Patience not found`
                })
        }

        return res.status(200).json({
            success: true,
            data: patience
        })
    }).catch(err => console.log(err))
}

getPatienceById = async (req, res) => {
    await Patience.findOne({ _id: req.params._id }, (err, patience) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if (!patience) {
            return res
                .status(404)
                .json({
                    success: false,
                    error: `Patience not found`
                })
        }
        return res.status(200).json({
            success: true,
            data: patience
        })
    }).catch(err => console.log(err))
}

module.exports = {
    createPatience,
    getPatiences,
    updatePatience,
    deletePatience,
    getPatienceById
}
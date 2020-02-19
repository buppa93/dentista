const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Patience = new Schema({
    name: {type: String},
    surname: {type: String},
    fiscalCode: {type: String},
    email: {type: String},
    phoneNumber: {type: String},
}, {timestamps: true})

module.exports = mongoose.model('patiences', Patience)
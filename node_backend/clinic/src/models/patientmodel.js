const mongoose = require('mongoose');
const validator = require('validator');

const Patients = mongoose.model('patientdetail', {
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: Date
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error('not a valid email');
            }
        }
    },
    state: String,
    city: String,
    address: String,
    recentDiagnosis: String,
    patientStatus: {
        type: String,
        required: true
    },
    amountPaid: {
        type: Number,
        default: 0
    }
});

module.exports = Patients
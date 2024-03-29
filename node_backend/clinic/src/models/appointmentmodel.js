const mongoose = require('mongoose');
const validator = require('validator');

const Appointment = mongoose.model('appointmentdetail', {
    date: {
        type: Date,
        required: true,
    },
    status: {
        type:String,
        required: true,
    },
    amountPaid: {
        type: Number,
        default: 0
    }
});

module.exports = Appointment
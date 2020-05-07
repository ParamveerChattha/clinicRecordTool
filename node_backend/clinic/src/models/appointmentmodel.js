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
    }
});

module.exports = Appointment
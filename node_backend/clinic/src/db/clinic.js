const mongoose = require('mongoose');
const { Appointment, Patients } = require('../models/appointmentmodel')

mongoose.connect('mongodb://127.0.0.1:27017/clinic-appointments', {
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => console.log('connected to appointment db'))
    .catch(err => console.error('failed to connect to db', err));

async function getAppointmentsWithName(patientStatus) {
    await (Appointment
        .find({ status: patientStatus }))
        .then(appointmentDetails => {
            console.log(appointmentDetails);
            return appointmentDetails;
        })
}

module.exports = { getAppointmentsWithName };

const {getAppointmentsWithName}  = require('../db/clinic.js')


const findAppointmentWithName = patientStatus => {
   return getAppointmentsWithName(patientStatus);
}



module.exports = (findAppointmentWithName);
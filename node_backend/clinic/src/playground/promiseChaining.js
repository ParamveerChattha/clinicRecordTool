require('../db/clinic');
const Appointments = require('../models/appointmentmodel');

//

const deleteAppointmentAndCount = async (id) => {

    const del = await Appointments.findByIdAndDelete(id)
    const count = await Appointments.countDocuments({ status: 'active' })
    return count
}

deleteAppointmentAndCount('5eb42fbc0efd8142e559c1ee').then((count) => {

    console.log(count,'deleted');
}).catch((e) => {
    console.log('error occured', e)
})


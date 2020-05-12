const express = require('express');
const router = express.Router();
const Appointment = require('../../models/appointmentmodel.js');

//finding appointment for status
router.get('/:status', async (req, res) => {
    const status = req.params.status
    try {
        const appointments = await Appointment.find({ status: status });
        res.status(200).send(appointments)
    } catch (e) {
        res.status(500)
    }
});
//adding new apppointment
router.post('/new', async (req, res) => {
    const newappointment = new Appointment(req.body);
    try {
        newappointment.save()
        res.status(200).send(newappointment)
    }
    catch (e) {
        res.status(500)
    }
});

//update status of appointment
router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdated = ['date', 'status']
    const isValid = updates.every(item => allowedUpdated.includes(item))
    if (!isValid) {
        res.status(400).send('not a valid update');
    }
    const appointment = await Appointment.findByIdAndUpdate((req.params.id), req.body, { new: true, runValidators: true })
    try {
        if (!appointment) {
            return res.status(400).send()
        }
        res.send(appointment)
    } catch (e) {
        res.status(500).send(e);
    }

});

router.delete('/:id', async (req, res) => {

    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id)
        if (!deletedAppointment) {
            return res.status(404)
        }
        res.send(deletedAppointment)
    } catch (e) {
        res.status(500)
    }

})

module.exports = router;
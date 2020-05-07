const express = require('express');
const router = express.Router();
const Appointment = require('../../models/appointmentmodel.js');

router.get('/name', (req,res) => {
    const details = findAppointmentWithName('active');
    res.send('data in console');
});

router.get('/number', (req,res) => {
    res.send('found with phone number');
});

router.post('/new', (req,res) => {
    const newappointment = new Appointment(req.body);
    newappointment.save()
    .then(() => 
    {
        res.send(newappointment)})
    .catch((e)=>{
        res.status(400).send(e);
        })
})

module.exports = router;
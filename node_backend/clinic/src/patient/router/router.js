const express = require('express');
const router = express.Router();
const Patients = require('../../models/patientmodel');
router.get('/', async (req, res) => {
    try {
        const patients = await Patients.find({})
        res.status(200).send(patients);
    }
    catch (e) {
        res.status(500).send();
    }
});

router.get('/number/:number', async (req, res) => {
    const number = req.params.number
    try {
        const patients = await Patients.find({ phoneNumber: number })
        res.status(200).send(patients)
    }
    catch (e) {
        res.status(500)
    }
});

router.get('/byname', async (req,res) => {
    try{
        const patients = await Patients.find({firstName: req.params.firstName, lastName: req.params.lastName})
        res.send(patients)
    }
    catch(e){
        res.status(500)
    }
})

router.post('/new', async (req, res) => {
    const addPatients = new Patients(req.body)
    try {
        await addPatients.save()
        res.status(201).send(addPatients)
    }
    catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
});

//update patient details
router.patch('/update/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const validOps = ['firstName', 'lastName', 'dob', 'state', 'city', 'address', 'email', 'phoneNumber', 'recentDiagnosis', 'status']
    const isValid = updates.every((val) => validOps.includes(val))
    if (!isValid){
        return res.status(400, 'not a valid update');
    }
    const patient = await Patients.findByIdAndUpdate((req.params.id), (req.body), { new: true, runValidators: true })
    try {
        if (!patient)
            return res.status(404).send('patient not found')
        res.send(patient)
    } catch (e) {
        res.status(500).send(e)
    }
})

//delete
router.delete('/:id', async (req, res) => {
    try {
        const patients = await Patients.findByIdAndDelete(req.params.id)
        if (!patients)
            return res.status(404)
        res.send(patients)
    } catch (e) {
        res.status(500)
    }
})

module.exports = router;
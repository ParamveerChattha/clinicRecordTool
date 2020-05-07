const express = require('express');
const router = express.Router();
const AddPatients = require('../../models/patientmodel');
router.get('/findby/name/:name', (req, res) => {
    res.send('patiend not found');
});
router.get('/findby/number', (req, res) => {
    res.send('patient found');
});

router.post('/delete/:name', (req, res) => {
    res.send('patient record deleted');
});

router.purge('/update/:name/:age/:city', (req, res) => {
    res.send('patient name deleted');
});

router.post('/new', (req, res) => {
    const patients = new AddPatients(req.body)
    patients.save()
        .then(() => {
            res.status(200).send(patients)
        })
        .catch((e) =>
            res.status(400).send(e))

});

module.exports = router;
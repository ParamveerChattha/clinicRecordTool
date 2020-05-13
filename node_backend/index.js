const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const appointment = require('./clinic/src/appointment/router/router.js');
const login = require('./clinic/src/login/router/router.js');
const patients = require('./clinic/src/patient/router/router.js');
const user = require('./clinic/src/users/router/router')

app.use((req,res,next) => {


    next()
});


app.use(express.json());
app.use('/patient', patients);
app.use('/appointments', appointment);
app.use('/login', login);
app.use('/patient', patients);
app.use('/user',user);
require('./clinic/src/db/clinic');
app.listen(port, () => {
    console.log(`listening at ${port}`)
});

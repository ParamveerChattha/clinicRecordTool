const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const appointment = require('./clinic/src/appointment/router/router.js');
const login = require('./clinic/src/login/router/router.js');
const patients = require('./clinic/src/patient/router/router.js');
const user = require('./clinic/src/users/router/router');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title: "Param's dental clinic API",
            description: "Param's dental clinic API information",
            contact:{
                name: "Dr. Paramjeet Kaur"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ['./clinic/src/appointment/router/*.js']
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

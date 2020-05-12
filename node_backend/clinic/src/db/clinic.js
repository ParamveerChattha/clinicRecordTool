const mongoose = require('mongoose');
 
mongoose.connect('mongodb://127.0.0.1:27017/clinic-appointments', {
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => console.log('connected to appointment db'))
    .catch(err => console.error('failed to connect to db', err));

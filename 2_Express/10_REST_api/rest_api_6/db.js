var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/apidb2')
    .then(() => console.log('Connected to MongoDB server successfully!'))
    .catch(err => console.error('Error to connect with database server', err));
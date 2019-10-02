const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/recycli_test', { useNewUrlParser: true })
mongoose.connection()
    .once('open', () => { done(); })
    .on('error', (err) => console.warn('Warning', err));

    
const db = require('./db/connection.js');
const { promptUser } = require('./lib/employeeTracker.js');


db.connect(err => {
    if (err) throw err;
    console.log('Connected Database.');
    promptUser();
});
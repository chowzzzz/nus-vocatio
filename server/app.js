const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//Handlebars
/*
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
*/

//Database
const db = require('./config/database');

//Test db
db.authenticate()
    .then(()=> console.log('Database Connected...'))
    .catch(err => console.log('Error: ' + err));


app.get('/', (req, res) => res.send('INDEX'));
//Routes
/*
app.use('/student', require('./routes/student'));
app.use('/faculty', require('./routes/faculty'));
app.use('/employer', require('./routes/employer'));
app.use('/admin', require('./routes/adminAcc'));
app.use('/jobPost', require('./routes/jobPost'));
*/


////
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server started on port ' + PORT));

const express = require('express');     // function (class) {}
const app = express();                  // instance of express

const cors = require('cors');   // cross origin request

const allow = ['http://localhost:3000']

app.use(cors({
    origin: function(origin, callback){
            if(!origin) return callback(null, true);
            if(allow.indexOf(origin) === -1){
            return callback(new Error("Cross-Origin Rejected"), false);
        }
        return callback(null, true);
    }
}));


// Configure so all req and res are in json
app.use(express.json());

// Importing routes
const questionRoutes = require('./routes/api/questions');

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo is connected'))
    .catch(err => console.log(err))

app.use('/api/questions', questionRoutes)

// Test Route
app.get('/', (req, res) => res.send('Backend is setup and running'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up on port ${port}`));
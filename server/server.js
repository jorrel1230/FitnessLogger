const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


// Init Config File
dotenv.config();

// Init Express App
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});



// API Endpoints
const userRouter = require('./routes/users');

app.use('/users', userRouter);





app.post('/register', (req, res) => {
    console.log(req.body.password);
});

app.listen(port, () => {
    console.log(`Server Running on ${port}!`);
});


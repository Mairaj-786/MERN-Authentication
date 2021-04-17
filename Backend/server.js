require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');



// Routes
const userRouter = require('./routes/user');


const app = express();
app.use(express.json());

app.use('/api', userRouter);



// DataBase Connections
mongoose.connect('mongodb://127.0.0.1:27017/EmployeeDB', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log("MongoDB Connected")
});

app.get('/', (req, res) => {
    res.json({ msg: 'hekki' })
});

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server started on port`);
});
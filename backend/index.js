const express = require('express');
const env = require ('dotenv');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
env.config();
app.use(cors());
app.use(express.json());

const clipRoute = require('./route/clipBoard');
const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.auydqp0.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});

app.use('/api', clipRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
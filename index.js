const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sensorData')
    .then(() => {
        console.log('Connection OPEN!!');
    })
    .catch((e) => {
        console.log('Error found', e);
    })

const Schema = mongoose.Schema;

const sensorData = new Schema({
    temperature: Number,
    humidity: Number,
    voltage: Number,
    current: Number
});

const SensorData = mongoose.model('SensorData', sensorData);

// SensorData.insertMany([
//     {temperature:12,humidity:10,voltage:22,current:25},
//     {temperature:19,humidity:2,voltage:9,current:19},
//     {temperature:3,humidity:11,voltage:13,current:23},
//     {temperature:5,humidity:16,voltage:25,current:5},
//     {temperature:2,humidity:21,voltage:22,current:23},
//     {temperature:43,humidity:5,voltage:13,current:3},
//     {temperature:56,humidity:3,voltage:4,current:6},
//     {temperature:12,humidity:24,voltage:16,current:62},
//     {temperature:67,humidity:67,voltage:42,current:7},
// ])
//     .then((data) => {
//         console.log("It worked");
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/sensor4', async (req, res) => {
    const sensor = await SensorData.find();
    
    const size = 9;
    const vector = new Array(size).fill(0);

    for (let i = 0; i < sensor.length; i++) {
      vector[i] = sensor[i].current;
    }
    res.render('sensor4',{temp: vector});
})

app.get('/sensor3', async (req, res) => {
    const sensor = await SensorData.find();
    
    const size = 9;
    const vector = new Array(size).fill(0);

    for (let i = 0; i < sensor.length; i++) {
      vector[i] = sensor[i].voltage;
    }
    res.render('sensor3',{temp: vector});
})

app.get('/sensor2', async (req, res) => {
    const sensor = await SensorData.find();
    
    const size = 9;
    const vector = new Array(size).fill(0);

    for (let i = 0; i < sensor.length; i++) {
      vector[i] = sensor[i].humidity;
    }
    res.render('sensor2',{temp: vector});
})

app.get('/sensor1', async (req, res) => {
    const sensor = await SensorData.find();
    
    const size = 9;
    const vector = new Array(size).fill(0);

    for (let i = 0; i < sensor.length; i++) {
        vector[i] = sensor[i].temperature;
    }
    res.render('sensor1',{temp: vector});
})

app.get('/', async (req, res) => {
    const sensor = await SensorData.find();
    
    const size = 9;
    const vector1 = new Array(size).fill(0);
    const vector2 = new Array(size).fill(0);
    const vector3 = new Array(size).fill(0);
    const vector4 = new Array(size).fill(0);

    for (let i = 0; i < sensor.length; i++) {
        vector1[i] = sensor[i].temperature;
        vector2[i] = sensor[i].humidity;
        vector3[i] = sensor[i].voltage;
        vector4[i] = sensor[i].current;
    }

    res.render('show',{temp1: vector1,temp2:vector2,temp3:vector3,temp4:vector4});
})

app.listen(3000, (req, res) => {
    console.log("Listening on port 3000");
})
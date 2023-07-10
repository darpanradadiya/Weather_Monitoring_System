const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorData = new Schema({
    temperature: Number,
    humidity: Number,
    voltage: Number,
    current: Number
});

module.exports = mongoose.model('SensorData', sensorData);

// const CampgroundSchema = new Schema({
//     title: String,
//     image: String,
//     price: Number,
//     description: String,
//     location: String
// });

// module.exports = mongoose.model('Campground', CampgroundSchema);
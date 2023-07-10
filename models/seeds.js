const sensorData = require("./sensorData");

sensorData.insertMany([
    {temperatire:12,humuduty:10,voltage:22,current:25},
    {temperatire:19,humuduty:2,voltage:9,current:19},
    {temperatire:3,humuduty:11,voltage:13,current:23},
    {temperatire:5,humuduty:16,voltage:25,current:5},
    {temperatire:2,humuduty:21,voltage:22,current:23},
    {temperatire:43,humuduty:5,voltage:13,current:3},
    {temperatire:56,humuduty:3,voltage:4,current:6},
    {temperatire:12,humuduty:24,voltage:16,current:62},
    {temperatire:67,humuduty:67,voltage:42,current:7},
])
    .then((data) => {
        console.log("It worked");
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    })
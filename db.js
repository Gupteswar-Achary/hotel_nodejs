const mongoose = require('mongoose');

//Define the mongodb connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

//Setup the mongodb connection
mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on('connected', ()=> {
    console.log('connected to mongdb server.')
})
db.on('error', (err)=> {
    console.log('cerror to connect with mongdb server.')
})
db.on('disconnected', ()=> {
    console.log('mongdb server disconnected')
})

module.exports = db;
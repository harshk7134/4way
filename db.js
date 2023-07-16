require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DB_CONNECTION_STRING;

const dbname = '4way';

async function connectDB() {
    try{
        await mongoose.connect(url);
        console.log('Connected to the database');
        }
    
    catch(err){
        console.log('Failed to connect to the database', err);
    }
}

module.exports = connectDB;

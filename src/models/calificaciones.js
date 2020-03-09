const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalifSchema = new Schema({
   alumno: String,
   matematicas: Number,
   programacion: Number,
   software: Number,
   status: {
       type: Boolean,
       default: false
   }
});

module.exports = mongoose.model( 'calificaciones', CalifSchema );
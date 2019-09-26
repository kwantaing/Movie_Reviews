const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

module.exports = function(app){
    app.use(express.static(path.join(__dirname,'../../public/dist/public')));
    mongoose.connect('mongodb://localhost/movies');
    var models_path = path.join(__dirname, './../models'); 
    fs.readdirSync(models_path).forEach(function(file){
        if(file.indexOf('.js') >= 0 ){
            require(models_path + '/' + file);
        }
    })
}
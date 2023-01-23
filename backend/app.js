//importation d'express
const express = require('express');
//application d'express à une var pour pouvoir s'en servir
const app = express();
//importation de mongodb
const mongoose = require('mongoose');

const path = require('path');
const bodyParser = require('body-parser');

//va chercher la logique des routes dans le fichier nous servant à mutualiser les routes ensemble
const sauceRoutes = require('./routes/sauce')
const userRoutes = require('./routes/user');

//importation de dotenv
require('dotenv').config();


//connexion à Mongo DB

mongoose.connect('mongodb+srv://Aeskender:L123123*@cluster0.d7yee83.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true, 
useUnifiedTopology:true })
.then(()=> console.log ('connexion à mongoDB réussie !'))
.catch((err)=> console.log(err));



//Permet au server de modifier des choses sur notre site ? CORS
app.use(express.json());

app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//utilise le'routeur' de express.Router() de par exemple: ./routes/sauces.js
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
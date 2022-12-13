const express = require('express');
const router = express.Router();
const tauxLimite = require('express-rate-limit'); // package pour prévenir des attaques par force brute
const userControllers = require('../controllers/user');

const connectLimatation = tauxLimite({
    windowMs: 2 * 60 * 1000, // Temps défini pour tester l'application
    max: 3 // Nbr de test max par adresse ip
  });

  router.post('/signup', userControllers.signup);
  router.post('/login', userControllers.login);
  
module.exports = router;        
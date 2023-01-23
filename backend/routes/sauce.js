const express = require('express');

// grâce à la méthode express.Router() cela permet de crée un routeur principal où on y enrgistre les routes (middlewares) individuelles.
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

//import les fonctions des middlewares depuis ../controllers/sauces.js
const sauceCtrl = require('../controllers/sauce')


router.get('/', auth, sauceCtrl.getSauces);
router.post('/', auth, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);

module.exports = router;
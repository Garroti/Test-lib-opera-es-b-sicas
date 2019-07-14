const express = require('express');
const router = express.Router();
const controllerNumbers = require('../controllers/numeros-controller');
const controllerNumber = require('../controllers/numero-controller');

let _crtNumbers = new controllerNumbers();
let _crtNumber = new controllerNumber();

router.post('/somarVetor', _crtNumbers.somar);
router.post('/media', _crtNumbers.media);

router.post('/somarNumeros', _crtNumber.somar);
router.post('/dividir', _crtNumber.media);


module.exports = router;
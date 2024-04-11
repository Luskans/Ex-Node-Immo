const express = require('express')
const Mongoose = require('mongoose');
const router = express.Router()
const annoncesController = require('../controllers/annonces');


router.get('/', annoncesController.getAllAnnonces);
router.post('/', annoncesController.createAnnonce);
router.get('/:id', annoncesController.getOneAnnonce);
router.put('/:id', annoncesController.updateAnnonce);
router.delete('/:id', annoncesController.deleteAnnonce);

module.exports = router
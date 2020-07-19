const express = require('express');
const router = express.Router(); //initializing instance of node router

// app controllers

//controller for providers
const providersController = require('../controllers/providers.controller'); 

//controller for producers
const producersController = require('../controllers/producers.controller'); 

// app http routes

//http request for providers
router.get('/providers',providersController.GetProviders);
router.get('/providers/:id',providersController.GetPDFInfo);
router.get('/providers/nombre/:id',providersController.ObtenerNombre);
router.get('/providers/esencias/:id',providersController.ObtenerEsenciasDeProveedor);
router.get('/providers/ingredientes/:id',providersController.ObtenerIngredientesDeProveedor);
router.get('/providers/alt_envio/:id',providersController.ObtenerAlternativasEnvio);

//presentaciones
router.get('/providers/esencia/:id',providersController.ObtenerPresentacionesEsencia);
router.get('/providers/ingrediente/:id',providersController.ObtenerPresentacionesIngrediente);

//http request for producers
router.get('/producers',producersController.GetProducers);
router.get('/producers/initial_test/:id',producersController.ProveedoresEvIni); //se pasa id de usuario productor

module.exports = router;

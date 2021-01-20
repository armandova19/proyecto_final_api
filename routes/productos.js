const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
router.get('/' , (req,res) => {
    res.render('index');
});

//PRODUCTOS
router.get('/productos', productosController.show);
router.get('/delete/:id' , productosController.delete);
router.post('/create' , productosController.create);

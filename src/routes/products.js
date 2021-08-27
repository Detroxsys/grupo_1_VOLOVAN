// ************ Require's ************
const express = require('express');
const router = express.Router();
const upload =require('../config/multer');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** Lista de Productos  ***/ 
router.get('/', productsController.index); 

/*** Detalle de Producto  ***/ 
//router.get('/:id', productsController.detail); 

/*** Crear un producto  ***/ 
router.get('/create', productsController.create);

/*** Carrito de Compra de Productos ***/ 
router.get('/productCart', productsController.productCart); 

/*** Crear un producto  (Acción) ***/ 
//router.post('/', productsController.build); 

/*** Edición de Productos ***/ 
router.get('/edit/:idProduct', productsController.edit);

/*** Edición de Productos (Acción) ***/ 
//router.put('/:idProduct', productsController.update);

/*** Eliminación de Producto (Acción) ***/ 
//router.delete('/:idProduct', productsController.delete);







module.exports = router;

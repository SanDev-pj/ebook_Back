const express = require('express')
const router = express.Router();
const { create, productById, read, remove, update, list, listRelated, listCategories, listBySearch,photo,listSearch } = require('../controller/product');
const { requireSignin, isAuth, isAdmin } = require('../controller/auth');
const { userById } = require('../controller/user');

router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.get("/product/:productId", read);
router.delete("/product/:productId/:userId", requireSignin, isAuth, isAdmin, remove);
router.put("/product/:productId/:userId", requireSignin, isAuth, isAdmin, update);

// route - make sure its post
router.post("/products/by/search", listBySearch);
router.get("/products/search", listSearch);
router.get('/product/photo/:productId', photo)
router.get('/products', list); 
router.get('/products/related/:productId', listRelated);
router.get('/products/categories', listCategories);
router.param('userId', userById);
router.param('productId', productById);

module.exports = router
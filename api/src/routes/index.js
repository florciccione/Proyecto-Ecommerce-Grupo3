const { Router } = require('express');
// import all routers; 
 

const routerProduct = require('./routerProduct.js');
const routerCategory = require('./routerCategory.js');
const authRouter = require('./auth.js');



const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/auth', authRouter);
router.use('/product', routerProduct);
router.use('/category', routerCategory);

module.exports = router;

const { Router } = require('express');
// import all routers;
const authRouter = require('./auth.js');
const routerProduct = require('./routerProduct.js');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/auth', authRouter);
router.use('/product', routerProduct);

module.exports = router;

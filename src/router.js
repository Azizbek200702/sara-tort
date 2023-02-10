const express = require('express');
const router = express.Router();
const userRouter = require("./users/router")
const ordersRouter = require("./orders/router")
const productsRouter = require("./products/router")
const storesRouter = require("./stores/router")
const listsRouter = require("./lists/router")


router.use('/users', userRouter);
router.use('/users', ordersRouter);
router.use('/products', productsRouter);
router.use('/stores', storesRouter);
router.use('/lists', listsRouter);


module.exports = router;
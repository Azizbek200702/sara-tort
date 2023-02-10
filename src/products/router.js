const express = require('express')
const router = express.Router()
const productsController = require("./controller")


router.route('/').post(productsController.addNew)

router.route('/').get(productsController.getAll)

router.route('/:id').get(productsController.getOne)

router.route('/:id').delete(productsController.delete)

router.route('/:id').put(productsController.update)

module.exports = router

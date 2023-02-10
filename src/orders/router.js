const express = require('express')
const router = express.Router()
const orderController = require("./controller")


router.route('/').post(orderController.addNew)

router.route('/').get(orderController.getAll)

router.route('/:id').get(orderController.getOne)

router.route('/:id').delete(orderController.delete)

router.route('/:id').put(orderController.update)

module.exports = router

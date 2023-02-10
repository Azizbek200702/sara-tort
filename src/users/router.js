const express = require('express')
const router = express.Router()
const userController = require("./controller")


router.route('/').post(userController.addNew)

router.route('/').get(userController.getAll)

router.route('/:id').get(userController.getOne)

router.route('/:id').delete(userController.delete)

router.route('/:id').put(userController.update)

module.exports = router

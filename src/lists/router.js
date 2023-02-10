const express = require('express')
const router = express.Router()
const listController = require("./controller")


router.route('/').post(listController.addNew)

router.route('/').get(listController.getAll)

router.route('/:id').get(listController.getOne)

router.route('/:id').delete(listController.delete)

router.route('/:id').put(listController.update)

module.exports = router

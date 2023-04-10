const Router = require('express')
const router = new Router()
const studentController = require('../controllers/studentController')

router.get('/', studentController.getAll )
router.get('/token:nick', studentController.token )
router.post('/', studentController.create)

module.exports = router
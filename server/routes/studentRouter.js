const Router = require('express')
const router = new Router()
const studentController = require('../controllers/studentController')
const authMiddleware = require('../middleware/checkAuth')

router.get('/', studentController.getAll )
router.get('/:nick', studentController.token )
router.post('/:nick', authMiddleware, studentController.create)

module.exports = router
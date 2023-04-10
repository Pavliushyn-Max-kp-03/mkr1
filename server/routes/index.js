const Router = require('express')
const router = new Router()
const StudentRouter = require('./studentRouter')

router.use('/student', StudentRouter)
module.exports = router
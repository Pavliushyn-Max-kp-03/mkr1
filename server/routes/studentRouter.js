const Router = require('express')
const router = new Router()

router.get('/', (req, res) => {
    res.json({message:"Router"})
} )
router.get('/token:nick', )
router.post('/')

module.exports = router
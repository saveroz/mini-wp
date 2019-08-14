const express = require('express')
const router = express.Router()
const ArticleController = require('../controllers/ArticleController')

router.get('/', ArticleController.getAll)
router.post('/', ArticleController.create)
router.delete('/',ArticleController.delete)
router.patch('/',ArticleController.update)



module.exports = router
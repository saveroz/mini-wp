const express = require('express')
const router = express.Router()
const ArticleController = require('../controllers/ArticleController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.use(authentication)
router.get('/', ArticleController.getAll)
router.get('/user', ArticleController.getAllUserArticle)
router.post('/', ArticleController.create)
router.delete('/:id',authorization,ArticleController.delete)
router.patch('/',authorization,ArticleController.update)



module.exports = router
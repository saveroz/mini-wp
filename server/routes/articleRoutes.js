const express = require('express')
const router = express.Router()
const ArticleController = require('../controllers/ArticleController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const {sendUploadToGCS,multer} = require('../helpers/images')

router.use(authentication)
router.get('/', ArticleController.getAll)
router.post('/', multer.single('image'),sendUploadToGCS,ArticleController.create)
router.delete('/:id',authorization,ArticleController.delete)
router.patch('/:id',authorization,multer.single('image'),sendUploadToGCS,ArticleController.update)



module.exports = router
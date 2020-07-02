const express = require('express')
const router = express.Router()
const { index, createPost, getPostByID, updatePost }  = require('../controllers/postController')

router.get('/', index)
router.get('/:id', getPostByID)
router.post('/', createPost)
router.put('/', updatePost)

module.exports = router
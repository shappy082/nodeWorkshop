const express = require('express')
const router = express.Router()
const { index, createPost, getPostByID, updatePost, deletePost }  = require('../controllers/postController')

router.get('/', index)
router.get('/:id', getPostByID)
router.post('/', createPost)
router.put('/', updatePost)
router.delete('/', deletePost)

module.exports = router
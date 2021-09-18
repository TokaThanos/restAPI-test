const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all the posts using GET
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch(err) {
    res.json({message: err});
  }
});

// Add a post using POST
router.post('/', async (req, res) => {
  const post = new Post(req.body);
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch(err) {
    res.json({ message: err });
  }
});

// Get a specific post using GET 
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch(err) {
    res.json({message: err});
  }
});

// Delete a specific post using DELETE
router.delete('/:id', async (req, res) => {
  try {
    const removedPost = await Post.findByIdAndDelete(req.params.id);
    res.json(removedPost);
  } catch(err) {
    res.json({message: err});
  }
});

// Update a specific post using PUT
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedPost);
  } catch(err) {
    res.json({message: err});
  }
});

module.exports = router;


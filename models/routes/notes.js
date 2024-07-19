const express = require('express');
const Note = require('../models/Note');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to authenticate JWT
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Access denied');
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
};

// Create Note
router.post('/notes', authMiddleware, async (req, res) => {
  const note = new Note({
    userId: req.user.userId,
    title: req.body.title,
    content: req.body.content,
  });
  await note.save();
  res.status(201).send(note);
});

// Read Notes
router.get('/notes', authMiddleware, async (req, res) => {
  const notes = await Note.find({ userId: req.user.userId });
  res.json(notes);
});

// Update Note
router.put('/notes/:id', authMiddleware, async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.userId },
    req.body,
    { new: true }
  );
  res.json(note);
});

// Delete Note
router.delete('/notes/:id', authMiddleware, async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
  res.status(204).send();
});

module.exports = router;

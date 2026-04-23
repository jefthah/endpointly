const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');

// Auth routes
router.use('/auth', authRoutes);

// You can add more routes here like:
// router.use('/projects', projectRoutes);

module.exports = router;

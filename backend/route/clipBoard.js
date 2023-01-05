const express = require('express');
const router = express.Router();
const clipBoardController = require('../controller/clipBoard');


router.post('/addClip',clipBoardController.addClip);

module.exports = router;
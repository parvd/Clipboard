const express = require('express');
const router = express.Router();
const clipBoardController = require('../controller/clipBoard');


router.post('/addClip',clipBoardController.updatePinned,clipBoardController.addClip);
router.get('/getPinnedClip',clipBoardController.getPinnedClip)

module.exports = router;
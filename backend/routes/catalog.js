var express = require('express');
var router = express.Router();
var imageController = require('../controller/imageController');


router.post('/post',imageController.returnThumbnail);

module.exports = router;
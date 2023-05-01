const express = require('express');
const router = express.Router();
const editController = require('../controller/editController');

router.get('/edit/:id', editController.getEdit);
module.exports = router;
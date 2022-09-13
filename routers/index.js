const express = require('express');
const router = express.Router();
const workerRouter = require('./workerRouter')

router.use('/workers',workerRouter  )

module.exports = router
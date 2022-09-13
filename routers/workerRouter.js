const express = require('express');
const router = express.Router();
const{createWorker, getAllWorker, getWorkerById} = require('../controller/workerController')

router.post('/', createWorker)
router.get('/', getAllWorker);
router.get('/:id', getWorkerById);




module.exports = router
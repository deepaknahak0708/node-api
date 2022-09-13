const Worker = require('../models/worker');


exports.createWorker = async (req, res) => {
    try {
        const worker = new Worker();
        worker.firstname = req.body.firstname
        worker.lastname = req.body.lastname
        worker.email = req.body.email
        worker.phone = req.body.phone
        worker.password = req.body.password
        console.log(worker)

        const createWorker = await worker.save();
        res.status(200).json({
            success: true,
            data: createWorker,
            message: 'Worker data created successfully'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: error,
            message: 'Error in creating a worker data'
        })
    }
};


exports.getAllWorker = async (req, res) => {
    try {
        const getData = await Worker.find();
        res.status(200).json({
            success: true,
            data: getData,
            message: 'All data read Successfully'
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            data: error,
            message: 'Data can not read'
        })
    }
};

exports.getWorkerById = async (req, res) => {
    try {
        const _id = req.params.id;
        const workerId = await Worker.findById(_id);
        res.status(200).json({
            success: true,
            data: workerId,
            message: 'Woker data get successfully by id'
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            data:error,
            message:'Error in get data by Id'
        })
    }
}


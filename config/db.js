const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('database successfully connected'))
.catch((e)=> console.log(`Cannot conected to database`))
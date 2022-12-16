const express = require('express');
const mongoose= require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/user");
const cors = require('cors')


const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors())
app.use('/api', userRoutes);


//routes
app.get('/', (req,res)=>{
    res.send('Welcome to my API')
});

//mongodb conection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('Connected to MongoDB Atlas'))
.catch((error)=>console.error('Error'))

app.listen(9000,()=> console.log('server listening on port', port));
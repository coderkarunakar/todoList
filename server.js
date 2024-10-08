//initializing library 
const  express =  require('express');
const mongoose = require('mongoose');


require('dotenv').config()
const todoRoutes = require('./Routes/todoRoutes')



//middleware
const app  = express()
app.use(express.json());

app.use((req,res,next) => { 
    console.log(req.path,req.method)
    next()
})


//Routes
app.use('/api/todo',todoRoutes)

//connecting
mongoose.connect(process.env.MONG_URI)
.then(()=> {
    app.listen(process.env.PORT, () => {
        console.log('connected to DB and listening to port',process.env.PORT)
    });
})
.catch((error) => {
    console.log(error);
})
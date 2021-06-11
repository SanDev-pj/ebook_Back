// importing express module
const express=require('express')
// importing Mongoose
const mongoose=require('mongoose')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const expressValidator=require('express-validator');
const cors=require('cors');
// importing routes
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/user')
const categoryRoutes=require('./routes/category')
const productRoutes=require('./routes/product')
const braintreeRoutes=require('./routes/braintree')
const orderRoutes=require('./routes/order')

const app=express()



// importing .env module
require('dotenv').config()

// DB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).then(()=>console.log('DB connected'))

// middlewires
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());


// routes middeware
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",braintreeRoutes);
app.use("/api",orderRoutes);



// calling PORT variable from .env file
const port=process.env.PORT || 8000

// showing the running status in CMD
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
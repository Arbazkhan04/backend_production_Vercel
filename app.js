
//Block Start Dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyparser = require("body-parser");

const ApplicationConfirgration=require('./configration/loadMyConfigrationFile') //first load env file then load other file
//otherwise it will through an error like " MongoDb is not connectedMongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.


const dataBaseConfirgration = require('./configration/dataBaseConfigration')


//Block End Dependencies


//Block Start Initialize the app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));

app.use(cors());
app.use('/assets', express.static('assets'));
app.use(express.static("public"));
const PORT = process.env.PORT || 4441;
//Block End Intialize the app


//Start Block Setting th Headers for your Application
app.all('*', (req, res, next) => {
    // This is how we protect the api
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next(); //if nothing of the response sent back so next() means other rou
});
//End Block Setting the Header for your Application

//Start Block Accessing The Routes in the Entry Point

const ProductMangementRouter = require('./Router/productMangementRouter');
const AdminManagmentRouter=require('./Router/AdminMangementRouter')
const PayManagmentRouter=require('./Router/PaymentMangementRoute')
const userManagementRouter=require('./Router/userManagementRouter')
const emailMangementRouter=require('./Router/emailServiceManagementRoute')
//*****UsingRoutes*****//
app.use('/ProductMangementRouter', ProductMangementRouter)
app.use('/AdminManagmentRouter', AdminManagmentRouter)
app.use('/PayManagmentRouter', PayManagmentRouter)
app.use('/userManagementRouter',userManagementRouter)
app.use('/emailMangementRouter',emailMangementRouter)
//*****UsingRoutes*****//


//End Block Accessing The Routes in the Entry Point


// //Serving Front End Form Your Server.js(Express)
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname +`/${process.env.STATIC_FOLDER}`));
// })
// //Serving Front End Form Your Server.js(Express)


//Start Block Checking Routes As express not found Url not Founded we need to do it explicitly 
app.use((req, res, next) => {
    const error = new Error('Url not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    })
});
//End Block Checking Routes As express not found Url not Founded we need to do it explicitly 

//Start Block For Listening Your App On Defined Port
app.listen(PORT, () => {
    console.log(`You Application has Launched from the Port 🚀 🚀 ${PORT}`);
    //  console.log(process.env.STRIPE_DEVELOPMENT_KEY);
})


//End Block For Listening Your App On Defined Port





















// const express=require('express')
// const AppLicationConfirgration=require('./configration/dataBaseConfigration')
// const app=express();
// const cors=require('cors')
// const port=8888;

// //block start initialization app
// app.use((express.urlencoded({extended:true})))
// app.use(express.json())
// app.use(express.text())
// app.use(express.raw())
// app.use(cors())  //cors allow us front end request to access

// const ProductMangementRouter=require('./Router/productMangementRouter');
// app.use('/ProductMangementRouter',ProductMangementRouter)


// app.listen(port,()=>{
//    console.log(`Server is listenting at port ${port}....`)
// })



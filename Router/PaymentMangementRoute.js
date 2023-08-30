const express=require('express')
const Router=express.Router();



//Acquiring my middleware

//Acquiring my middleware

//Acquiring my controller
const {PayWithStripe}=require('../controller/payWithStripe')
//Acquiring my controller

//defining routes
Router.post('/PayWithStripe',PayWithStripe)



module.exports=Router;
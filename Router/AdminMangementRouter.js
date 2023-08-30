const express=require('express')
const Router=express.Router()


//Acquiring my middleware
const {AuthorizeAdmin}=require('../MiddleWare/AdminAuthorization')
//Acquiring my middleware

//Acquiring my controller
const {AdminLogin,AdminRegister}=require('../controller/AdminMangementController')
//Acquiring my controller

//defining routes
Router.post('/AdminLogin',AuthorizeAdmin,AdminLogin)
Router.post('/AdminRegister',AuthorizeAdmin,AdminRegister)


module.exports=Router;
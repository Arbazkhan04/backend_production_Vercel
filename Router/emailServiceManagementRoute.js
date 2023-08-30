const express = require('express');
const Router = express.Router();

const { sendEmailAgent  } = require('../controller/emailMangementController');

Router.post('/sendEmailAgent',sendEmailAgent);
module.exports =  Router
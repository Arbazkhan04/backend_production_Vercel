const express=require('express')
const router=express.Router();

//calling middleware
const {UploadProductImage}=require('../MiddleWare/uploadMedia')
//calling middleware

//clling my routes
const {ProductData,GetProductData,searchBar,getDocumentById,DeleteProductById,hardDeleteProductById,updateProductById,getDocumentByCatagory,shoesCatory,pantCatory,quataCatory,makupCatory,getBabyData,getGroceriesData,zeroToTwenty,twentyFiveToFiveHun,aboveFromFiveHundred}=require('../controller/productMangementController')
//calling my routes
router.post('/ProductData',UploadProductImage.array('images',20),ProductData); //uploaimage.single('productImage') whatever inside the signal method it should be same with the front end 
router.get('/GetProductData',GetProductData)
router.get('/getDocumentById/:Id',getDocumentById)
router.delete('/DeleteProductById/:_id',DeleteProductById)
router.delete('/hardDeleteProductById/:_id',hardDeleteProductById)
router.post('/updateProductById',updateProductById)
router.get('/getDocumentByCatagory',getDocumentByCatagory)
router.get('/shoesCatory',shoesCatory);
router.get('/pantCatory',pantCatory);
router.get('/quataCatory',quataCatory);
router.get('/makupCatory',makupCatory);
router.get('/getGroceriesData',getGroceriesData);
router.get('/getBabyData',getBabyData);
router.get('/zeroToTwenty',zeroToTwenty);
router.get('/twentyFiveToFiveHun',twentyFiveToFiveHun);
router.get('/aboveFromFiveHundred',aboveFromFiveHundred);
router.get('/searchBar',searchBar);



// router.post('/updataData',updataData)
// router.delete('/deleteData',deleteData)
module.exports=router
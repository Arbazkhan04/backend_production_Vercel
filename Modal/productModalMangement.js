const mongoose = require("mongoose");
//Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth()+1;
const year = today.getFullYear();
const time = today.getTime();

//creating Schema (metaData/Information)
const ProductSchema = mongoose.Schema({
    productName :{ type:String , required:true},  //mongo db create indexses
    quantity:{type:Number, required:true, default:0},
    price :{ type:Number , required:true},
    companyName:{type:String,required:true},
    color:{type:String,required:true},
    size:[],
    description:{type:String,required:true},
    ProductImages:[{
        ProductImageUrl: { type: String },
        ProductImageName: { type: String },
        ProductImageMimeType: { type: String },
    }],
    category:{type:String,required:true},
    softDelete:{type:Number,default:0},
    Status :{ type:Number , default:1},
    CreateDate :{
        type:String,
        default:`${day}-${month}-${year}-${time}`
    }
    
},{timestamps:true})

//Export Schema
module.exports=mongoose.model('productcollection',ProductSchema);
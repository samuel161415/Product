
const mongoose=require('mongoose')

const schema=mongoose.Schema
const dataSchema=new schema({
name:{
    type: String,
    
},
quantity: { type: Number,
   // required: true
},
pricePerPiece:{
    type: Number,
    //required:true
},
id:{
    type: String,
    //required: true

},
date:{
    type: Date,
    default:false
},
})
module.exports=mongoose.model('Purchases',dataSchema)
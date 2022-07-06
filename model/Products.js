
const mongoose=require('mongoose')

const schema=mongoose.Schema
const dataSchema=new schema({
name:{
    type: String,
    required: true
},
description:{
    type: Number,
    required: true
},
quantity_on_stock:{
    type: Number,
    required:true
},
id:{
    type: String,
    required: true

},
registredOn:{
    type: Date,
    default:false
},
lastUpdatedOn:{
    type: Date,
    default:false
},
})
module.exports=mongoose.model('Products',dataSchema)
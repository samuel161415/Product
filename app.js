const express=require('express')
// const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken');
require('./Connection')
const purchase=require('./model/Purchase')
const product=require('./model/Products')
const app=express()
app.use(express.json());

app.use(express.urlencoded({
  extended: true
      }));
app.get('/',(req,res)=>{
    res.send("hi")
})


app.post('/create_purchases/:productId',async (req,res)=>{
    
    console.log("saim");
    const value=new purchase({
        products:req.body.product,
        id:req.params.productId,
        purchased_quantity:req.body.quantity,
        purchased_price_per_piece: req.body.pricePerPiece,
        date:new Date()
      })
try{
  const returnValue=await value.save()   // used to save data to database
  res.status(200).json(returnValue)
}
catch(error){
res.send('error'+ error)
}
})


app.get('/get_all_product_details',async(req,res)=>{
    console.log("am excuted",req.body.date1);
    const {date1}=req.body
    const {date2}=req.body
    var products=''
    var perchasedProducts
    try{
        if(date1&&date2){
          console.log('both date');
          const filter={"registredOn": {
            $gte:date1,
            $lte:date2,
          },}
            perchasedProducts= await product.find({
                  startPostion:req.body.startPostion,
                  maxResult:req.body.maxResult,
                  filter
                 
            }) 
    
        }
        else if(date1){
            console.log("date1");
            var filter = {"registredOn": { $gte: req.body.date1 }}; 
            perchasedProducts= await product.find(
               { startPostion:req.body.startPostion,
                maxResult:req.body.maxResult,
               filter
            }
               
            )
        }
        else{
            console.log('date 2');
            const filter={"registredOn": { $lte: req.body.date2 }}
            perchasedProducts= await product.find(
                { startPostion:req.body.startPostion,
                 maxResult:req.body.maxResult,
                filter
             }
                
             )
        }
        const returnPurchase=await purchase.find();
        const returnvalue=perchasedProducts.concat(returnPurchase)
        res.status(200).send(returnvalue)
    }
    catch(err){
        res.send("error")
    }  
})

app.listen(3000,()=>{
    console.log("server is listning on port 3000");
})


//var mysql = require('mysql');




// const {MongodbClient}=require('mongodb')

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "samuel",
//     password: "yourpassword"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

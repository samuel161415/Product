var mongoose=require('mongoose')


require('dotenv').config()
mongoose.connect(process.env.url)
const con=mongoose.connection
con.on('error',(error)=>{
    console.log(error);
})
con.on('open',()=>{console.log("am connected properly");})

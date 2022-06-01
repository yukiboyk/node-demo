var mongoose = require("mongoose");
var dotenv = require("dotenv").config();



const connectDB =  async ()=>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            //must add in order to not get any error masseges:
            useUnifiedTopology:true,
            useNewUrlParser: true,
        })
        console.log(`Ket Noi Toi MongoDB Thanh Cong !!! -  ${conn.connection.host} `)
    }catch(error){
        console.error(`Ket Noi That Bai: ${error} `)
        process.exit(1) //passing 1 - will exit the proccess with error
    }

}
module.exports = connectDB();
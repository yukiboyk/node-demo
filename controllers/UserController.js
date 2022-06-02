const AccountModels = require("../models/users");

const getMember = {
     //getall
     getAllUser : async (req,res) => {
         try {
          if (!req.headers.token) {
           return res.json({"status":"error","msg":"Authorization is not valid"});      
          }
             const allUser = await AccountModels.find({});
             res.json({"status":"succes","msg":"Get Data Succees","data":allUser});          
         } catch (error) {
             console.log(error);
         }
     }

}
module.exports = getMember;
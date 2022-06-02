const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/manhnodejs');
const database = require("../core/config.js");

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const AccountSchema = new mongoose.Schema({
   username : {
       type : String,
       required : "Ten Tai khoan khong duoc bo trong",
       minlength : 3,
       unique: true,
       match: [/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/,'Vui long nhap username hop le']
   },
   email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required : 'Email Khong Duoc bo trong',
    validate: [validateEmail, 'Vui long nhap email hop le'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Vui long nhap email hop le']
},
   password : {
       type :String,
       minlength: 3,
       required :true
   },
   role: {
       type: Boolean,
       required :true,
       default: false
   }
},
{
     timestamps:true,
     collection: 'Account'
});
const AccountModels = mongoose.model("User", AccountSchema);
module.exports = AccountModels;

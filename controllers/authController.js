const User = require("../models/users");
// const bcrypt = require('bcrypt');

const authController = {
    ////reg
    registerUser : async (req,res) => {
        try {
        //   const salt = await bcrypt.genSaltSync(10);
        //   const hashed = await bcrypt.hashSync(`${req.body.password}`, salt);

            const newUser = await new User({
                  username: req.body.username,
                  password: req.body.password,
                  email: req.body.email
            });
           const createUser = await newUser.save();
           res.status(200).json({"status":200,"msg":"Create New Users Success","data":createUser});
        } catch (err) {
            res.status(500).json({"status":500,"msg":"Register New Users Fails","data":err})
        }
    },

   
}

module.exports = authController;
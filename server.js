const express = require("express");
const app = express();
const cors = require("cors");
const { xss } = require('express-xss-sanitizer');
const dotenv = require("dotenv").config();
const Account = require("./models/users");
const authRouter = require("./routers/auth");
const databaseDB = require("./core/config");
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set(express.static("/views"));


app.use(cors({  
   origin: '*',
   optionsSuccessStatus: 200
}));

app.use(express.json());

app.get ("/", function(req,res) {
    res.render("index")
});
///Router
app.use("/api",xss(), authRouter);


app.listen(port, () => {
 console.log(`Sever Running On The port: ${port}`);
});
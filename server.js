const express = require("express");
const app = express();
const cors = require("cors");
const { xss } = require('express-xss-sanitizer');
const dotenv = require("dotenv").config();
const Account = require("./models/users");
const authRouter = require("./routers/auth");
const databaseDB = require("./core/config");

app.use(cors());
app.use(express.json());

app.get ("/", function(req,res) {
    res.send("HELLO CAC BAN")
});
///Router
app.use("/v1/auth",xss(), authRouter);

app.listen(process.env.PORT || 3000, () => {
 console.log(`Sever Running On The port: ${process.env.PORT}`);
});
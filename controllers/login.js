const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const CONSTANTS = require('../config/constant');

const userLoginController = function(req,res){
    
    const loginData = req.body;
    if(loginData.email && loginData.password){
        console.log("Recieved login data =>", loginData);
     const user = CONSTANTS.userDetails.find(user => user.email === loginData.email);
     if(user){
              bcrypt.compare(loginData.password,user.password,(err,result) =>{
                if(!result){
                    console.log(result)
                    res.status(400).json({message:"Invalid credentials"});
                }else{
                    const jwtToken = jwt.sign(loginData, CONSTANTS.SECRET_KEY);
                     res.status(200).json({
                        "message" : "User logged in successfully.",
                        "token": jwtToken});
                }
              })
     }else{
        res.status(400).json({message:"Invalid credentials hiii"});
     }
        
    }
    else{
        return res.status(400).json({message:"Invalid credentials hello"});
    }
};

module.exports = {userLoginController};
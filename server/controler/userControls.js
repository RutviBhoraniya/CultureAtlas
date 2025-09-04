const UserModel = require("../models/User");
const crypto = require("crypto");

const generateUserId=()=> {
  return "user_" + crypto.randomBytes(6).toString("hex"); 
}

const userControls = {
    getAllUsers:async (req, res) => {
        try {
            const allUser = await UserModel.find(); 
            res.json(allUser);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Server Error" });
        }
    },
    getUser:async (req, res) => {
        const userId = req.params.id
        try {
            const user = await UserModel.find({userid:userId}); 
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Server Error" });
        }
    },
    signUp:async (req, res) => {
        try {
            const newUser = req.body
            console.log(newUser)
            const newUserData = await new UserModel({
            userid:generateUserId(),
            username:newUser.username,
            email:newUser.email,
            password:newUser.password,
            contry:newUser.contry
            })
            await newUserData.save(); 
            res.status(200).json({success:true, message:"SignUp successfully",user:newUserData});
        } catch (err) {
            if(err.code==11000){
                res.status(500).json({ success:false , message: "Email alrady Exist"});
            }
            res.status(500).json({ success:false , message: "Server Error" , err:err});
        }
    },
    login:async(req,res)=>{
        try{
            const user = req.body
            const singleUser = await UserModel.find({email:user.email})
            console.log(singleUser)
            if(singleUser.length!=0){
                if(singleUser[0].password == user.password){
                res.status(200).json({success:true,message:"Login Succesfully",user:singleUser})
                }else{
                res.status(400).json({success:false,message:"incorrect username or password"})
                }
            }else{
                res.status(400).json({success:false,message:"no user found"})
            }
        }catch(err){
            res.status(500).json({ success:false , message: "Server Error" , err:err});
        }
    },
    deleteUser:async(req,res)=>{
        try{
            const userId = req.params.id;
            const deleteduser = await UserModel.findOneAndDelete({userid:userId})
            res.json({success:true,deleteduser : deleteduser})
        }catch(err){
            res.status(500).json({ success:false , message: "Server Error" , err:err});
        }
    }
}

module.exports = userControls;
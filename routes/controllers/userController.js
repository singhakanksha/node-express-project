const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel")
const brcypt =  require("bcrypt")
const jwt = require("jsonwebtoken")
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req, res) => {
    console.log("inside register user")
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const userAvailable =  await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered")
    }
        //hash password
    // const hasedPasswrod = await brcypt(password, 10);
    console.log(password)
    const user = await User.create({
            username,
            email,
            password
    })
    if(user){
            res.status(201).json({
                _id: user.id,
                email: user.email
            })
    }else{
            res.status(400);
            throw new Error("User data is not valid")
    }
        
    }
   
)



//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req, res) => {
    console.log("inside login")
    const {email, password} = req.body
    console.log({email, password})
    const user  = await User.findById("645086353b562e2bd988b197")
    console.log(user)
    if(!email || !password){
        res.status(400);
        throw new Error('All fields are mandatory')
    }
    const accessToken = jwt.sign({
        user:{
            username: user.username,
            email: user.email,
            if: user.id
        }
    }, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "1m"})
   
    //compare password
    if(user && (password === user.password)){
      res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("email or password is not valid")
    }
    res.status(200).json("Login user")
})

//@desc current user info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async(req, res) => {
    res.status(200).json("user info")
})

module.exports = {registerUser, loginUser, currentUser}
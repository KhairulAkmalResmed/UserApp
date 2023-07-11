require('../models/db');
const User = require('../models/user.js');




exports.listUsers = async(req, res) => {
    // res.send('Hello World');

    try{
        const users = await User.find({});
        res.json(users);
    } catch(err){
        res.status(400).json({message:err})
    }
}

exports.createUser = async(req, res) => {
    // res.send('Hello World');
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        dob: req.body.dob,
        gender: req.body.gender,
        
    });

    try{
        await newUser.save();

    } catch(err){
        res.status(400).json({message:err})
    }
}

exports.updateUser = async(req,res) => { 
    let paramID = req.params.id;
    let name = req.body.name;
    let email = req.body.email;
    let dob = req.body.dob;
    let gender = req.body.gender;

    try{
        const updateUser = await User.updateOne({_id:paramID},{$set:{name:name,email:email,dob:dob,gender:gender}});
        res.json(updateUser);
    }
    catch(err){
        res.status(400).json({message:err})
    }
}
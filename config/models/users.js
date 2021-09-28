const db=require('mongoose');

const users=new db.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    course:{
        type:String,
    },
    city:{
        type:String,
    }
});

module.exports= new db.model('UsersApi',users);
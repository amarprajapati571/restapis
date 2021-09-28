const db=require('mongoose');
require('dotenv').config();
db.connect(process.env.DB).then(()=>{
    console.log('db is connected');
}).catch((e)=>{
    console.log(e);
});
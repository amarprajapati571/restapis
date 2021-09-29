require('dotenv').config();
const express=require('express');
const app=express();
const Users=require('../config/models/users');
const db=require('../config/db/db');
const port=process.env.PORT||8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/user', async (req,res)=>{
   try {
       const datas=await Users.find();
       res.status(200).send(datas);
   } catch (error) {
    // const datas=Users.find();
    res.status(400).send(error);
   }
})

app.post('/user',async (req,res)=>{
    try{
        const userData=new Users(req.body);
        userData.save();
        res.status(201).send('saved');
            
    }catch(e){
        res.status(400).send(e);
    }
        
    
});

app.patch('/user/:id',async (req,res)=>{
    try {
        const _id=req.params.id;
        const userdata=req.body;
        const datas=await Users.findByIdAndUpdate(_id,userdata,{
            new:true
        });
        console.log('updated');
        res.status(200).send(datas);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/user/:id',async (req,res)=>{
    try {
        const _id=req.params.id;
        await Users.findByIdAndDelete(_id);
        res.status(200).send('deleted !');
    } catch (error) {
        res.status(400).send(error)
        
    }
})


app.listen(port,()=>{
    console.log('server is started');
})



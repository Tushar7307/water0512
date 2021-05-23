const mongoose = require('mongoose');
const List = require('../models/list');
const express = require('express');
const router = express.Router();

router.get('/',async(req,res)=>{
    const list = await List.find();
    res.send(list);
});
router.post('/',async(req,res)=>{
    const list = new List({
        title:req.body.title
    });
    await list.save();
    res.send(list);
});

router.put('/:id',async(req,res)=>{
    const list = await List.findOneAndUpdate({
        list_id:req.params.id,

        title:req.body.title
    });
    res.send(list);
});

router.post('/delete/:id',async(req,res)=>{
    const list =  await List.findByIdAndDelete({
        _id:req.params.id
    });
    if(list){
        res.send(list)
    }
    else{
        res.send("no list found");
    }
   
});


module.exports = router;


const mongoose = require('mongoose');
const Task = require('../models/task');
const express = require('express');
const router = express.Router();

router.get('/:id',async(req,res)=>{
    
    const task = await Task.find({list_id: req.params.id})
    
    res.send(task);
});

router.post('/:id',async(req,res)=>{
    // console.log(req.body.list_id)
    const task = new Task({
        title:req.body.title,
        list_id:req.body.list_id
    });
    await task.save();
    res.send(task);
});

router.put('/:id',async(req,res)=>{
    const task = await Task.findByIdAndUpdate({
        title:req.body.title,
        list_id:req.params.list_id    
    });
    res.send(task);
});

router.delete('/:id',async(req,res)=>{
    const task = await Task.findByIdAndRemove({
        title:req.body.title,
        _id:req.params.id
    });
    console.log(req.params.id);
    res.send(task);
});
// router.delete('',async(req,res)=>{
//     const task =  await Task.deleteOne();
//     res.send(task);
// });

module.exports = router;


const express = require('express');
const router = express();
const Dish = require("../models/dish.jsx");

// INDEX
router.get('/', async (req,res)=>{
    try{
        const dishes = await Dish.find();
        res.send({
            success: true,
            data: dishes
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})
// CREATE
router.post('/', async (req,res) => {
    try {
        const newDish = await Dish.create(req.body);
        res.send({
            success: true,
            data: newDish
        })
    } catch (err) {
        res.send({
            success: false,
            data: err
        })
    }
})
// SHOW
router.get('/:id', async (req,res) => {
    try{
        const dish = await Dish.findById(req.params.id);
        if(!item){
            // throw Error is not appearing?
            throw new Error ("No item by that id here")
        }
        res.send({
            success: true,
            data: dish
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})
// DELETE
router.delete('/:id', async (req,res)=>{
    try{
        const dish = await Dish.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
            data: dish
        })
    } catch (err) {
        res.send({
            success: false,
            data: err.message
        })
    }
})
// UPDATE
router.put('/:id', async (req,res)=>{
    try{
        const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send({
            success: true,
            data: dish
        })
    } catch (err){
        res.send({
            success: false,
            data: err.message
        })
    }
})

module.exports = router;
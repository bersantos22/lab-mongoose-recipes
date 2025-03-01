const mongoose = require('mongoose');
const express = require('express')
const router = express.Router()
const data = requiere('../models/Recipe.model.js')
const Recipe = require('../models/Recipe.model')



router.post('/create-recipe', async (req,res) =>{
    try{
        const newRecipe = await Recipe.create(req.body);
        return res.status(201).json(newRecipe)
    } catch (error){
        return res.status(500).json(error);
    }
})

router.post('./create-post', async (req, res)=>{
    try{

        const newRecipes = await Recipe.insertMany(data);
        return res.status(200).json(newRecipes);
    } catch(error) {
        return res.status(500).json(error);
    }
/* Recipe.insertMany(data) */

})

router.put('/update/:title/:duration', async (req, res) => {
    const { title, duration } = req.params
    try {
        const updateRecipe = await Recipe.findOneAndUpdate({ title: title }, { duration: Number(duration) })
        return res.status(200).json(updateRecipe)
    } catch (error) {
        return res.status(500).json(error);
    }
})

router.delete('/delete/:title', async (req, res) => {
    const { title } = req.params

    try {
        const deleteRecipe = await Recipe.deleteOne({ title: title })

        return res.status(200).json(deleteRecipe)
    } catch (error) {
        return res.status(500).json(error);
    }

})


module.exports = router;
const express = require('express')
const router = express.Router();
const Menu = require('./../Models/Menu')

router.get('/', async(req, res) =>{
    try{
        const data = await Menu.find();
        console.log('Menu fetched')
        res.status(200).json(data)       
    }catch(err){
        console.log(err)
        res.status(500).json({err: 'Internal server error'})
    }
})


router.post('/', async(req, res) =>{
    try{
        // const data = req.body
        const newMenu = new Menu(req.body)
        const response = await newMenu.save()
        console.log('Menu saved')
        res.status(200).json(response)  
    }catch(err){
        console.log(err)
        res.status(500).json({err: 'Internal server error'})
    }
})

// The variable tasyeType take the value from the url
router.get('/:tasteType', async(req, res)=> {
    try{

        const tasteType = req.params.tasteType
        if(tasteType == 'sour' || tasteType == 'spicy' || tasteType=='sweet'){
            const response = await Menu.find({taste:tasteType})
            console.log("taste fetched")
            res.status(200).json(response)
        }

    }catch(err){
        console.log(err)
        res.status(500).json({err: 'Internal server error'})
    }
})

module.exports = router;
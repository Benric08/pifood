const express = require('express');
const router = express.Router();

router.get('/foods',(req,res)=>{
    res.status(200).json({'name':'richard'});
})

module.exports=router;
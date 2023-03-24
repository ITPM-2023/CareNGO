import express from "express";
import index from "../models/index";

const router = express.Router();
//save 
router.post('/post/save',(req,res)=>{
    let newPost = new Posts (req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err

            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});

module.exports = router;
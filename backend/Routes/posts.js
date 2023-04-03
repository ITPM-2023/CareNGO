// use to write http requests
const express = require('express');
const Posts = require('../Model/posts');
const router = express.Router();

//save
router.post('/post/save',(req,res) =>{
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

    //get 
    router.get('/posts',(req,res) =>{
        Posts.find().exec((err,posts) =>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:true,
                existingPosts:posts
            });
        });

    });

    //update
    router.get('/post/update/:id',(req,res) =>{
        Posts.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            (err,post)=>{
                if(err){
                    return res.status(400).json({
                        error:err
                    });
                }
                return res.status(200).json({
                    success:"Updated successfully"
                });
            }
        );
    });


    //delete 
    router.delete('/post/delete/:id',(req,res) =>{
        Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
            if(err) {
                return res.status(400).json({
                    message:"Deleted unsuccessful",err
                });
            }
            return res.json({
                message:"Deleted unsuccessful",deletedPost
            
            });
            
        });
    });


});

module.exports = router;
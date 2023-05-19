//import express
const express=require('express')

//import cors
const cors=require('cors')

//import logic
const logic=require('./services/logic')

//create server
const server=express()

//connections

server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json());

server.listen(8000,()=>{
    console.log('listening on port 8000');
    console.log('DB Connected');
})

//getting all forms details

server.get('/allforms',(req,res)=>{
    logic.allForms().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
        
    )
})

//add form details

server.post('/addforms',(req,res)=>{
    logic.addForms(req.body.id, req.body.productname, req.body.box, req.body.name, req.body.mail, req.body.contact).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
        
    )
})


//edit form details

server.post('/editforms',(req,res)=>{
    logic.editForms(req.body.id, req.body.productname, req.body.box, req.body.name, req.body.mail, req.body.contact).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
        
    )
})

//delete form details

server.delete('/deleteforms/:id',(req,res)=>{
    logic.deleteForms(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
        
    )
})

//get form details

server.get('/getforms/:id',(req,res)=>{
    console.log(req.params.id);
    logic.getForms(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
        
    )
})
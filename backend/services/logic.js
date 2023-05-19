const db=require('./db')

//get all forms

const allForms=()=>{
    return db.Forms.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    forms:result
                }
            }else{
                return{
                    statusCode:404,
                    message:'Donation Form not found'
                }
            }
        }
    )
}
//add form
const addForms=(id,productname,box,name,mail,contact)=>{
    return db.Forms.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:400,
                    message:'Donation already placed'
                }
            }else{
                const newForms=new db.Forms({id,productname,box,name,mail,contact})
                newForms.save()
                return{
                    statusCode:200,
                    message:'Donation placed Successfully'
                }
            }
        }
    )
}

//edit form
const editForms=(id,productname,box,name,mail,contact)=>{
    return db.Forms.findOne({id}).then(
        (result)=>{
            if(result){
                result.id=id,
                result.productname=productname,
                result.box=box,
                result.name=name,
                result.mail=mail,
                result.contact=contact
                result.save()
                return{

                    statusCode:200,
                    message:'Details Edited Successfully'
                }
            }
        }
    )
}

//delete Forms
const deleteForms=(id)=>{
    return db.Forms.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:'Donation deleted sucessfully'
                }
            }else{
                return{
                    statusCode:400,
                    message:'No data'
                }
            }
        }
    )
}

//retrieve all forms
const getForms=(id)=>{
    return db.Forms.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    forms:result,
                    message:'Got data'
                }
            }else{
                return{
                    statusCode:400,
                    message:'No data'
                }
            }
        }
    )
}
module.exports={
    allForms,
    addForms,
    editForms,
    deleteForms,
    getForms
    
}
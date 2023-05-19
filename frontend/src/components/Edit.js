import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Forms from './Forms';
import axios from 'axios';
import Swal from 'sweetalert2';

function Edit() {
    const [id,setId]=useState('')
    const [productname,setProductName]=useState('')
    const [box,setBox]=useState('')
    const [name,setName]=useState('')
    const [mail,setMail]=useState('')
    const [contact,setContact]=useState()

    //api call to get particular donation form
    const params=useParams()
    console.log(id);
    const fetchForm=async()=>{
        const result = await axios.get('http://localhost:8000/getforms/'+params.id)
        const details=result.data.forms;
        setId(details.id)
        setProductName(details.productname)
        setBox(details.box)
        setName(details.name)
        setMail(details.mail)
        setContact(details.contact)
    }


    useEffect(()=>{
        fetchForm()

        
    },[])

    var index = Forms.map(item=>item.id).indexOf(id)
    console.log(index);
    let history=useNavigate()
    const handleUpdate=async(e)=>{
        e.preventDefault()//avoid refreshing
        if (!productname || !box || !name || !mail || !contact) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }
        const body={
            id,
            productname,
            box,
            name,
            mail,
            contact
          }
          const result = await axios.post('http://localhost:8000/editforms',body)  
          alert(result.data.message)
          Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `Data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
        history('/')
    }
  return (
    <div className="text-center p-3">
    <h1 className='text-warning text-center'>Update Donation Details</h1>
    
        <Form className='border border-3 p-1 d-inline-block'>
        <Form.Group className="mb-2">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter your id" value={id} onChange={(e)=>setId(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Name" value={productname} onChange={(e)=>setProductName(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>No. of Boxes</Form.Label>
            <Form.Control type="number" placeholder="Enter Boxes" value={box} onChange={(e)=>setBox(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Donor Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Donor Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Donor Email Address" value={mail} onChange={(e)=>setMail(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Contact Number" value={contact} onChange={(e)=>setContact(e.target.value)} required/>
        </Form.Group>


        <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
            Update Details
        </Button>
    </Form>
        </div>
  )
}

export default Edit;
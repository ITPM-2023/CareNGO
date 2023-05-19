import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Forms from './Forms';
import uuid from 'react-uuid';
import axios from 'axios';
import Swal from 'sweetalert2';

function Add() {
  const [id,setId]=useState('')
    const [productname,setProductName]=useState('')
    const [box,setBox]=useState('')
    const [name,setName]=useState('')
    const [mail,setMail]=useState('')
    const [contact,setContact]=useState()

    useEffect(()=>{
      setId(uuid().slice(0,8))

    },[])
    const history=useNavigate()
    const handleAdd=async(e)=>{
      e.preventDefault()  
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
      const result = await axios.post('http://localhost:8000/addforms',body)
      console.log(result);
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `Data has been Added.`,
        showConfirmButton: false,
        timer: 1500
    });
      history('/')
      }
  return (
    <div className="text-center p-3">
      <h1 className='text-warning'>Add Donation Details</h1>
      <Form className='border border-3 p-1 d-inline-block'>

        <Form.Group className="mb-2">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Name" 
            onChange={(e)=>setProductName(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>No. of Boxes</Form.Label>
            <Form.Control type="number" placeholder="Enter Boxes" 
            onChange={(e)=>setBox(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Donor Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Donor Name" 
            onChange={(e)=>setName(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Donor Email Address" 
            onChange={(e)=>setMail(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Contact Number" 
            onChange={(e)=>setContact(e.target.value)} required/>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
            Submit 
        </Button>
      </Form>
    </div>
  )
}

export default Add;

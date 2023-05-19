import React from 'react'
import Forms from './Forms'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserTimes,FaUserPlus,FaUserEdit,FaPrint } from "react-icons/fa";
import axios from 'axios';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
import './print.css';

function Home() {
  const [allForms,setAllForms]=useState([])

  const fetchdata=async()=>{
    const result=await axios.get('http://localhost:8000/allforms')
    setAllForms(result.data.forms)
  }
  console.log(allForms);
  useEffect(()=>{
    fetchdata()
  },[])
  const history=useNavigate()
  const handleDelete=async(id)=>{
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
  }).then(async result => {
      if (result.value) {
        const result=await axios.delete('http://localhost:8000/deleteforms/'+id)

          Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: `Data has been deleted.`,
              showConfirmButton: false,
              timer: 1500,
          });
          fetchdata()
          history('/')
      }
  });
  }
  const handleEdit=async(id,productname,box,name,mail,contact)=>{
    localStorage.setItem('ID',id)
    localStorage.setItem('Product Name',productname)
    localStorage.setItem('No. of Boxes',box)
    localStorage.setItem('Donor Name',name)
    localStorage.setItem('Email Address',mail)
    localStorage.setItem('Contact Number',contact)
  }
  const handlePrint = () => {
    window.print();
  }


  return (
    <>
    <h1 className='text-warning text-center'>Product Donation</h1>
    
    <Link to={'/Add'}>
    <Button variant="success ms-2 no-print">Add <FaUserPlus/></Button>
    </Link>
    
        <Button style={{marginLeft: "1em"}} onClick={handlePrint} className="no-print">Print<FaPrint /></Button>
    
    <h3 className='ms-2'>List of all Donations</h3>
    <Table bordered hover variant="dark" style={{margin: "1.5em"}}>
      <thead>
        <tr>
          <th>id</th>
          <th>Product Name</th>
          <th>Box</th>
          <th>Donor Name</th>
          <th>Email Address</th>
          <th>Contact Number</th>
        </tr>
      </thead>
      <tbody>
        {
            allForms?.map((item)=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.productname}</td>
                    <td>{item.box}</td>
                    <td>{item.name}</td>
                    <td>{item.mail}</td>
                    <td>{item.contact}</td>
                    <td>
                      <Link to={'/Edit/'+item.id}>
                      <Button onClick={()=>handleEdit(item.id,item.productname,item.box,item.name,item.mail,item.contact)} variant="info no-print"><FaUserEdit/>
                      </Button>
                      </Link>
                    
                    <Button onClick={()=>handleDelete(item.id)} variant="primary no-print"><FaUserTimes/></Button>
                    
                    </td>
                </tr>
            ))
        }
      </tbody>
    </Table>
    </>
  )
}

export default Home;
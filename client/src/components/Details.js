import React from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DraftsIcon from '@mui/icons-material/Drafts';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


const Details = () => {
  const {id} = useParams("");
  console.log(id);

  const [getUserData,setUserData] = useState([]);
  console.log(getUserData);

  const getdata = async()=>{

    const res = await fetch(`/getuser/${id}`,
    {
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    });
    const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data){
        console.log("error");
    }
    else{
      setUserData(data);
        console.log("get data")
    }
}

useEffect(()=>{
  getdata();
},[])

  return (
    <div className="container mt-3">
        <h1 style={{ fontWeight:400 }}> Welcome to Emrul Hasan</h1>
        <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add-btn">
          <button className='btn btn-primary mx-2'><BorderColorIcon></BorderColorIcon></button>
           <button className='btn btn-danger'><DeleteForeverIcon></DeleteForeverIcon></button>
          </div>
          <div className="row">
          <div className="left-view col-lg-6 col-md-6 col-12">
            <AccountCircleIcon></AccountCircleIcon>
             <h3 className='mt-3'>Name: <span >{getUserData.name}</span></h3>
             <h3 className='mt-3'>Age: <span >{getUserData.age}</span></h3>
             <p className='mt-3'><DraftsIcon></DraftsIcon> Email: <span>{getUserData.email}</span></p>
             <p className='mt-3'><MapsHomeWorkIcon></MapsHomeWorkIcon>Occupation: <span>{getUserData.work}</span></p>
            </div>
            <div className="right-view col-lg-6 col-md-6 col-12">
               <p className='mt-5'><PhoneIcon></PhoneIcon>Phone : <span>{getUserData.mobile}</span></p> 
               <p className='mt-3'><PlaceIcon></PlaceIcon>Location : <span>{getUserData.add}</span></p>
               <p className='mt-3'>Description: {getUserData.desc} </p>

            </div>
          </div>
          
            
        </CardContent>
        </Card>
    </div>
  )
}
export default Details
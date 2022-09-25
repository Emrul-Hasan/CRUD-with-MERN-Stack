import React from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DraftsIcon from '@mui/icons-material/Drafts';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';


const Details = () => {
  return (
    <div className="container mt-3">
        <h1 style={{ fontWeight:400 }}> Welcome to Emrul Hasan</h1>
        <Card sx={{ maxWidth: 600 }}>
     
        <CardContent>
            <AccountCircleIcon></AccountCircleIcon>
            <div className="left-view">
             <h3 className='mt-3'>Name: <span >Emrul Hasan</span></h3>
             <h3 className='mt-3'>Age: <span >Emrul Hasan</span></h3>
             <p><DraftsIcon></DraftsIcon> Email: <span>jkdf@gmail.com</span></p>
             <p><MapsHomeWorkIcon></MapsHomeWorkIcon>Occupation: <span>Someting</span></p>
            </div>
            <div className="right-view">
                

            </div>
            
        </CardContent>
        </Card>
    </div>
  )
}

export default Details
import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className=' bg-info' style={{background: "linear-gradient(45deg,#EFEBEB,#B7E5F9)" }}>
            <div className="container">
                <div className="add-btn mt-2">
                   <NavLink to="/register" className='btn btn-primary'> Add Data</NavLink>
                </div>

                <table class="table table table-striped">
  <thead>
    <tr className='table-info'>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope="col">Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <th scope="row">1</th>
      <td>Emon</td>
      <td>emon@gmail.com</td>
      <td>Web developer</td>
      <td>01782387758</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success' ><RemoveRedEyeIcon></RemoveRedEyeIcon></button>
        <button className='btn btn-primary'><BorderColorIcon></BorderColorIcon></button>
        <button className='btn btn-danger'><DeleteForeverIcon></DeleteForeverIcon></button>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Emon</td>
      <td>emon@gmail.com</td>
      <td>Web developer</td>
      <td>01782387758</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success' ><RemoveRedEyeIcon></RemoveRedEyeIcon></button>
        <button className='btn btn-primary'><BorderColorIcon></BorderColorIcon></button>
        <button className='btn btn-danger'><DeleteForeverIcon></DeleteForeverIcon></button>
      </td>
    </tr>
  
  
  </tbody>
</table>
            </div>
        </div>
    );
};

export default Home;
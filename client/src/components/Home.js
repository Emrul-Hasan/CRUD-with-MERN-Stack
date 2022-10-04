import React, { useEffect, useState,useContext } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { NavLink, redirect } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'

const Home = () => {
  const [getUserData,setUserData] = useState([]);
  console.log(getUserData);
  const { udata, setUdata } = useContext(adddata);

    const {updata, setUPdata} = useContext(updatedata);

    const {dltdata, setDLTdata} = useContext(deldata);

  const getdata = async(e)=>{

    const res = await fetch("/getdata",
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

useEffect (() =>{
  getdata();
},[])

const deleteuser = async (id) => {

  const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
  });

  const deletedata = await res2.json();
  console.log(deletedata);
 

  if (res2.status === 422 || !deletedata) {
      console.log("error");
  } else {
    
      console.log("user deleted");
      setDLTdata(deletedata);
      getdata();
     
  }

}



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

    {
      getUserData.map((element,id)=>{
        return(
          <>
             <tr>
      <th scope="row">{id + 1}</th>
      <td>{element.name}</td>
      <td>{element.email}</td>
      <td>{element.work}</td>
      <td>{element.mobile}</td>
      <td className='d-flex justify-content-between'>
        <NavLink to={`view/${element._id}`}><button className='btn btn-success' ><RemoveRedEyeIcon></RemoveRedEyeIcon></button></NavLink>
        <NavLink to={`edit/${element._id}`}><button className='btn btn-primary'><BorderColorIcon></BorderColorIcon></button></NavLink>
        <button className='btn btn-danger' onClick={() => deleteuser(element._id)}><DeleteForeverIcon></DeleteForeverIcon></button>
      </td>
    </tr>
          </>
        )
      })
    }

  
  </tbody>
</table>
            </div>
        </div>
    );
};

export default Home;
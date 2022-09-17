import React from 'react';

const Home = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="add-btn mt-2">
                   <button className='btn btn-primary'> Add Data</button>
                </div>

                <table class="table">
  <thead>
    <tr className='table-info'>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope="col">Number</th>
      <th scope="col"></th>
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
        <button className='btn btn-success' ><i class="fa-sharp fa-solid fa-eye-slash"></i></button>
        <button className='btn btn-primary'><i class="fa-sharp fa-solid fa-pen-to-square"></i></button>
        <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Emon</td>
      <td>emon@gmail.com</td>
      <td>Web developer</td>
      <td>01782387758</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success' ><i class="fa-sharp fa-solid fa-eye-slash"></i></button>
        <button className='btn btn-primary'><i class="fa-sharp fa-solid fa-pen-to-square"></i></button>
        <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  
  
  </tbody>
</table>
            </div>
        </div>
    );
};

export default Home;
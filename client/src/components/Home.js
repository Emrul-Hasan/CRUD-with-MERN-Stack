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
      <td>
        <button>View</button>
        <button>Update</button>
        <button>Delete</button>
      </td>
    </tr>
  
  
  </tbody>
</table>
            </div>
        </div>
    );
};

export default Home;
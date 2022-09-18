import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container" >
        <NavLink to="/">home</NavLink>
        <form className="mt-4 " >
            <div className="row"  >
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text"  name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="email"  name="email" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Age</label>
                    <input type="text"  name="age" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Mobile</label>
                    <input type="number"  name="mobile" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Work</label>
                    <input type="text" name="work" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">Address</label>
                    <input type="text"  name="add" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 col-lg-12 col-md-12 col-12">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <textarea name="desc"  className="form-control" id="" cols="30" rows="5"></textarea>
                </div>

                <button type="submit"  class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
    );
};

export default Register;
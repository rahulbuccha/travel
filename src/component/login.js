import React from "react";
import './signup.css'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="border-0 shadow rounded-3 overflow-hidden">
                    <div className="card-img-left d-none d-md-flex">

                    </div>
                    <div className="card-body p-4 p-sm-5">
                        <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus />
                                <label for="floatingInputUsername">Username</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="d-grid mb-2">
                                <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Login</button>
                            </div>
                            <Link to="/signup">
                                <a className="d-block text-center mt-2 small" href="#">Create New Accout? Sign Up</a>
                            </Link>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Login



import React from "react";
import './home.css'

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="ui raised padded text container segment"
        style={{ marginTop: "80px" }}>

        <h3 className="ui header">Home</h3>
        <div className="text">
          Book Flights, Hotels, Trains, Buses, Cruise and Holiday Packages
          On Yatra.com, you can tailor your trip from end-to-end by scouring suitable
          flights and making your flight booking before proceeding with your hotel bookings.
          Yatra vast hotel repository will see you through this process seamlessly.
          Any intervening journey can be conveniently planned by searching up relevant
          train connectivity and making an IRCTC ticket booking. Look up well-researched
          holiday packages, sift through cruise packages and finalise your entire trip on just one platform.
        </div>

        <div>
          <h2> Login or Signup to continue</h2>
        </div>
      </div>
      <div>

        <Link to="/signup">
          <button type="button" class="btn btn-danger">
            Signup
          </button>
        </Link>&nbsp;&nbsp;&nbsp;
        <Link to="/login">
          <button type="button" class="btn btn-danger">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;


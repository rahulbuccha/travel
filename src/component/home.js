import React from "react";

const Home = () => {
  return (
    <div>
        <div
      className="ui raised padded text container segment"
      style={{ marginTop: "80px" }}>

      <h3 className="ui header">Home</h3>
      <h4>
        RRJVP.com is an Indian online travel agency and travel search engine. It
        is based in New Delhi, Haryana. It was founded by Rohit, Rahul
        Jatin,Vipul and Pankaj in Feb 2022.
      </h4>
      <img src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg" style={{"width" : "70%"}}></img>
      <div>
         <h2> Login or Signup to continue</h2>
      </div>
    </div>
    <div>
        <button type="button" class="btn btn-primary">Signup</button>&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary">SignIn</button>
      </div>
    </div>
  );
};
export default Home;

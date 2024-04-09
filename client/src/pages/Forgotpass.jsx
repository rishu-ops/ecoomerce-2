import React from 'react'
import  { useState } from "react";
import Layout from '../components/layout/Layout';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Authstyles.css";


const Forgotpass = () => {
    const [email, setEmail] = useState("");
    const [newpassword, setnewPassword] = useState("");
    const [question, setnewaswer] = useState("")
    const navigate = useNavigate();
    
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/vl/auth/forget-password", {
          email,
          newpassword ,
          question
        });
        if (res && res.data.success) {
          alert(res.data && res.data.message);
          
          navigate( "/login");
       
        } else {
          alert(res.data.message);
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    };
  return (
    <Layout title={"forgot password "}>
        <div className="form-container ">
            <form onSubmit={handleSubmit}>
              <h4 className="title">RESET PASSWORD</h4>
    
              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email "
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="String"
                  value={question}
                  onChange={(e) => setnewaswer(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Favorite Movie"
                  required
                />
              </div>
             
              <div className="mb-3">
                <input
                  type="password"
                  value={newpassword}
                  onChange={(e) => setnewPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter New Password"
                  required
                />
              </div>
             
              <button type="submit" className="btn btn-primary">
                RESET
              </button>

            </form>
          </div>
    </Layout>
  )
}

export default Forgotpass

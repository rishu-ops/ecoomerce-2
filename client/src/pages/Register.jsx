import React , {useState} from 'react'
import Layout from '../components/layout/Layout'
import axios from "axios";
import { useNavigate } from "react-router-dom";

import '../styles/Authstyles.css'

const Register = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [question, setanswer] = useState("");
   
     const navigate = useNavigate();

     const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("https://ecommerce-e3o2.onrender.com/api/v1/auth/register", {
          name,
          email,
          password,
          phone,
          address,
          question,
        });
        if (res && res.data.success) {
          alert("user is registered" );
          navigate("/login");
        } else {
          alert(res.data.message);
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    };
  

  return (
    <Layout>
    <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={question}
              onChange={(e) => setanswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What Is Your Favorite Movie "
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Register

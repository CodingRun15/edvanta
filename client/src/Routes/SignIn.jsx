import "../App.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
const initForm = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();
  const {login} = useAuth();
  const [formData, setFormData] = useState(initForm);
    function handleChange(e) {
    let input = e.target;
    setFormData({ ...formData, [input.name]: input.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.email && formData.password) {
      const response = await axios.post(
        "http://localhost:4000/user/signin",
        formData
      );
            if (response.status === 200) {
                login();
                 console.log(response.data);
                 localStorage.setItem("token", response.data.message);
                navigate('/create');
            }
            if(response.status ===401){
               console.log("Login failed,user not found");
            }
    } else {
      alert("Please fill out all fields");
    }
    setFormData(initForm);
  }
  return (
    <>
      <div className="form">
        <input
          name="email"
          value={formData.email}
          type="email"
          placeholder="Enter your email address"
          onChange={handleChange}
        />
        <input
          name="password"
          value={formData.password}
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Sign In
        </button>
      </div>
    </>
  );
};

export default SignIn;

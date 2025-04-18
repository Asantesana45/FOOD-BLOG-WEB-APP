import React, { useState } from 'react';
import axios from 'axios'
export default function InputForm(setIsOpen) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [error,setError]=useState("")
    const handleOnSubmit = async(e) => {
        e.preventDefault();
     let endpoint=(isSignUp) ? "signUp" :"login"
        await axios.post(`http://localhost:5000/${endpoint}`, {email,password})
        .then((res)=>{
           localStorage.setItem("token",res.data.token)
           localStorage.setItem("user",JSON.stringify(res.data.user))
           setIsOpen()
        })
        .catch(data=>setError(data.response?.data?.error))

        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Mode:", isSignUp ? "Sign Up" : "Login");
    };

    return (
        <form className='form' onSubmit={handleOnSubmit}>
            <div className='form-control'>
                <label>Email</label>
                <input 
                    type='email' 
                    className='input' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>

            <div className='form-control'>
                <label>Password</label>
                <input 
                    type='password' 
                    className='input' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>

            <button type='submit'>{isSignUp ? "Sign Up" : "Login"}</button> <br />
           { (error!="") && <h6 className='error'>{error}</h6>}
            <p onClick={() => setIsSignUp(prev => !prev)} style={{ cursor: "pointer", color: "blue" }}>
                {isSignUp ? "Already have an account" : "Create new account"}
            </p>
        </form>
    );
}

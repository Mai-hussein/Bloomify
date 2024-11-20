import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
    email: "",
    password: ""
    };
    

    isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
    }

    render() {
    return (
    <div className="signup">
    <div className="signup-container">
    <h1>Login</h1>
    <div className="signup-fields">
        <input type="email" name="email"  placeholder="Email Address" value={this.state.email} onChange={(e) => {
                        this.setState({
                            email: e.target.value
                        })
                    }}  />
        <input type="password" name="password"  placeholder="Password" value={this.state.password} onChange={(e) => {
                        this.setState({
                            password: e.target.value
                        })
                    }}  />
    </div>
    <button onClick={()=>{
        if(!this.isValidEmail(this.state.email)){
            alert("Invalid Input");
        }else{
            alert("done");
        }
    }}>Continue</button>
    <p className="signup-login">
        Don't have an account?    
        <Link to="/signup" style={{color: "#ff4141", textdecoration: "none", fontweight: "600"}}>  Signup here</Link>       
    </p>
    </div>
    </div>
)}}

export default Login
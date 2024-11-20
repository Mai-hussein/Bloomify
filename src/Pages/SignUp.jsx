import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    state = {
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    };
    

    isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
    }

    isValidName(username) {
    return username.length > 0 && username.length <= 20;
    }

    isvalidPhone(phone) {
    return /\+\d{11}/.test(phone);
    }

    isPasswordConfirmed(password, confirmPassword) {
        return password === confirmPassword;
    }
    // handleInputChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    // handleSubmit = () => {
    //     if(!this.isValidName(this.state.username)  || !this.isvalidPhone(this.state.phone) || !this.isPasswordConfirmed(this.state.password)){
    //         alert("Invalid Input");
    //         console.log(this.state.username,this.state.email, this.state.phone, this.state.password)
    //     }else{
    //         alert("done")
    //     }
    // }
    render() {
    return (
    <div className="signup">
    <div className="signup-container">
    <h1>Sign Up</h1>
    <div className="signup-fields">
        <input type="text" name="username" placeholder="Your Name" value={this.state.username} onChange={(e) => {
                        console.log(e.target.value);
                        this.setState({
                            username: e.target.value
                        })
                    }}  />
        <input type="text" name="phone"  placeholder="Phone Number" value={this.state.phone} onChange={(e) => {
                        console.log(e.target.value);
                        this.setState({
                            phone: e.target.value
                        })
                    }}  />
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
        <input type="password" name="confirmPassword"  placeholder="Confirm Password" value={this.state.confirmPassword} onChange={(e) => {
                        console.log(e.target.value);
                        this.setState({
                            confirmPassword: e.target.value
                        })
                    }} />
    </div>
    <button onClick={()=>{
        if(!this.isValidName(this.state.username)  || !this.isvalidPhone(this.state.phone) || !this.isValidEmail(this.state.email) || !this.isPasswordConfirmed(this.state.password, this.state.confirmPassword)){
            alert("Invalid Input");
            console.log(this.state.username,this.state.email, this.state.phone, this.state.password)
        }else{
            alert("done");
        }
    }}>Continue</button>
    <p className="signup-login">
        Already have an account?    
        <Link to="/login" style={{color: "#ff4141", textdecoration: "none", fontweight: "600"}}>   Login here</Link>       
    </p>
    </div>
    </div>
)}}

export default SignUp
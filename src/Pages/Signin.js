import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

  
  class Signin extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: null,
        password: null,
        formErrors: {
          name: "",
          password: ""
        }
      };
    }
  
    handleSubmit = e => {
      e.preventDefault();
  
         fetch('http://localhost/vishnue/Deals_of_market/public/usersLogin',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      }).then(response => {
              console.log(response)
              // if(response.ok === true){

              // window.location.href = '/';
              // }
          })
          .catch(error =>{
              console.log(error)
          })
    };
  
    handleChange = e => {
      e.preventDefault();
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };
  
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
  
    render() {
      const { formErrors } = this.state;
        return (
          <div className="App_cmn">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/Signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/Signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
            <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields" >
              <div className="FormField">
                  <label className="FormField__Label" htmlFor="name">Email or mobile phone number</label>
                  <input type="text" id="name" className={formErrors.name.length > 0 ? "error FormField__Input" : "FormField__Input"} placeholder="Enter your full name" name="name" onChange={this.handleChange} />
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="password" id="password" className={formErrors.password.length > 0 ? "error FormField__Input" : "FormField__Input"} placeholder="Enter your password" name="password" onChange={this.handleChange} />
                </div>

                <div className="FormField">
                <button className="FormField__Button mr-20">Sign In</button><Link to="/Signup" className="FormField__Link">Create an account</Link>
                </div>
            </form>
          </div>
          </div>
          </div>
        );
    }
}

export default Signin;

import React, { Component } from 'react';
import { Link, NavLink, Redirect} from 'react-router-dom';
import alertify from 'alertifyjs';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      phone: null,
      email: null,
      password: null,
      fireRedirect: false,
      formErrors: {
        name: "",
        phone: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    

    if (formValid(this.state)) {
      console.log(`
        name: ${this.state.name}
        phone: ${this.state.phone}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);

      fetch('http://localhost/laravel/Deals_of_market/public/usersRegistration',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      }).then(res => res.json()).then(response => {
        if(response.status === true){
          this.setState({ fireRedirect: true })
        }
        else{
          alertify.alert('Deals of Market', 'Email id or phone number is already exits', function(){ 
          });
        }
      })
          .catch(error =>{
              console.log(error)
          })

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "phone":
        formErrors.phone =
          value.length < 10 ? "minimum 10 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {

    if(this.state.fireRedirect) {
      return <Redirect to={'/'}/>
  }
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
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Name</label>
                <input type="text" id="name" className={formErrors.name.length > 0 ? "error FormField__Input" : "FormField__Input"} placeholder="Enter your full name" name="name" onChange={this.handleChange} />
                {formErrors.name.length > 0 && (
                  <span className="errorMessage">{formErrors.name}</span>
                )}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="phone">Phone</label>
              <input className={formErrors.phone.length > 0 ? "error FormField__Input" : 'FormField__Input'}  placeholder="phone Number" type="Number" name="phone" onChange={this.handleChange}
              />
              {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
              )}
            </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className={formErrors.email.length > 0 ? "error FormField__Input" : "FormField__Input"} placeholder="Enter your email" name="email" onChange={this.handleChange} />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className={formErrors.password.length > 0 ? "error FormField__Input" : "FormField__Input"} placeholder="Enter your password" name="password" onChange={this.handleChange} />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="FormField">
              <button className="FormField__Button mr-20">Sign Up</button><Link to="/signin" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
          </div>
          </div>
        );
    }
}

export default Signup;

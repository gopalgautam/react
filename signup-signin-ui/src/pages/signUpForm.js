import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const formValid = hasErrors => {
  let valid = true;

  //Object.hasOwnProperty(hasErrors) === true && (valid = false);

  //hasErrors.hasOwnProperty(myProp)
  var myProp = 'prop';
  // if(Object.values(hasErrors).indexOf()){
  //   valid = false
  // }else valid = true

  //Object.values(hasErrors).each();

  console.log(Object.values(hasErrors), Object.values(hasErrors).length, hasErrors)
  
  return valid;
}

class signUpForm extends Component{
    constructor(props){
      super(props);

      this.state = {
        name: '',
        email: '',
        password: '',
        hasAgreed: false,
        hasErrors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e){
      let target = e.target;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      let name = target.name;
      let hasErrors = this.state.hasErrors;

      console.log(this.props.valueOf());
      //console.log([name] + '-' +value)

      switch(name){
        case 'name': 
          hasErrors.name = value.length < 3 && value.length > 0 ? 'Minimum 3 charectors required.' : '';
          break;
        case 'email': 
          hasErrors.email = value.length < 3 && value.length > 0 ? 'Minimum 3 charectors required.' : '';
          break;
        case 'password': 
          hasErrors.password = value.length < 3 && value.length > 0 ? 'Minimum 3 charectors required.' : '';
          break;
        case 'hasAgreed': 
          hasErrors.hasAgreed = target.checked !== true ? 'Please check terms of services.' : '';
          break;
        default:
        break;
      }
      
      this.setState({[name]: value }, console.log(this.state));

    }

    handleSubmit(e){
      e.preventDefault();
      //console.log(this.state);
      if(formValid(this.state.hasErrors)){
        console.log(this.state);
      }else{
        console.error('Invalid Forms');
      }
    }

    render(){
        return(
            <div className="FormCenter" >
                <form action="" className="FormField" onSubmit={this.handleSubmit} noValidate>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Full Name</label>
                    <input type="text" className="FormField__Input" id="name" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
                  </div>

                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">E-mail Address</label>
                    <input type="email" className="FormField__Input" id="email" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                  </div>

                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" className="FormField__Input" id="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </div>

                  <div className="FormField">
                    <label className="FormField__CheckboxLabel" htmlFor="hasAgreed">
                      <input type="checkbox" className="FormField__CheckboxLabel" name="hasAgreed" id="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="/#" className="FormField__TermsLink">terms of services</a>
                    </label>                
                  </div>

                  <div className="FormField">
                    <button className="FormField__Button mr-20">Sign Up</button>
                    <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
                  </div>
                </form>
              </div>
        )
    }
}

export default signUpForm;
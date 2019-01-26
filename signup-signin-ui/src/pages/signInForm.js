import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class signInForm extends Component{
    constructor(){
      super();

      this.state = {
        email: '',
        password: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
      let target = e.target;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      let name = target.name;

      this.setState({
        [name] : value
      })
    }

    handleSubmit(e){
      e.preventDefault();
      console.log(this.state);
    }

    render(){
        return(
            <div className="FormCenter">
                <form action="" className="FormField" onSubmit={this.handleSubmit}>

                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="Email">E-mail Address</label>
                    <input type="email" className="FormField__Input" id="email" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                  </div>

                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Password</label>
                    <input type="password" className="FormField__Input" id="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </div>
                  
                  <div className="FormField">
                    <button className="FormField__Button mr-20">Sign In</button>
                    <Link to="/" className="FormField__Link">Create new Account</Link>
                  </div>
                </form>
              </div>
        )
    }
}

export default signInForm;
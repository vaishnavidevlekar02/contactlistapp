// AddContact Component
import React, { Component } from 'react';
import './AddContact.css'; // Create a CSS file for AddContact styling

export default class AddContact extends Component {
  state ={
    name:"",
    email:"",
  }
add =(e)=>{
  e.preventDefault();
  if(this.state.name===""||this.state.email===""){
    alert("all the fields are required");
    return;
  }
  this.props.addContactHandler(this.state);
  this.setState({name:"",email:""});
  console.log(this.state);
}
  render() {
    return (
      <div className='add-contact-container'>
        <div className='ui main'>
          <form className='ui form' onSubmit={this.add}>
            <h2>Add Contact</h2>
            <div className='field'>
              <label>Name</label>
              <input type='text' name='name' placeholder='Name'value={this.state.name} onChange={(e)=>this.setState({
                name:e.target.value
              })} />
            </div>
            <div className='field'>
              <label>Email Address</label>
              <input type='text' name='email' placeholder='Enter Email Address'  value={this.state.email} onChange={(e)=>this.setState({
                email:e.target.value
              })} />
            </div>
            <button className='ui button blue' >Add</button>
          </form>
        </div>
      </div>
    );
  }
}


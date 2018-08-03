import React from 'react';
import {FormGroup,FormControl,ControlLabel,HelpBlock} from 'react-bootstrap';

export default class InPatientForm extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      firstName:'',
      lastName: '',
      dob: null,
      mobileNum: null,
      email: '',
      address1: '',
      address2: '',
      illness: ''
    }
  }

  handleChange(e)
  {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
    println(e.target);
  }

  render(){
    return(
      <div className = "RegisterForm">
      <br/> <br/>
      <h2> Please Enter your details below </h2>
      <form>
        <label > First Name
        <input type = "text" onChange={this.handleChange.bind(this)} value = {this.state.firstName}/>
        </label><br/> <br/>
        <label> Last Name
        <input type = "text" value={this.state.lastName}/>
        </label><br/> <br/>
        <label> DOB
        <input type="date" value={this.state.DOB}/>
        </label><br/> <br/>
        <label>address 1
        <input type="address" value={this.state.address1}/>
        </label><br/> <br/>
        <label>address 2
        <input type="address" value={this.state.address2}/>
        </label><br/> <br/>
        <label>email
        <input type="email" value={this.state.email}/>
        </label><br/> <br/>
        <label>Phone Number
        <input type="number" value={this.state.mobileNum}/>
        </label><br/> <br/>
        <label>Patient Illness
        <input type="text" value={this.state.illness}/>
        </label><br/> <br/>

      </form>
      </div>
    )
  }
}

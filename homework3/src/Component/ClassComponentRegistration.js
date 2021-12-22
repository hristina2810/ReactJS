import React from "react";


export class ClassComponentRegistration extends React.Component () {
        constructor(props){
            super(props)
            console.log('Constructor');
              this.state = {firstName: "" };
              this.state = {lastName:""};
              this.state = {country:""};
              this.state = {username:""};
              this.state = {password:""};
              this.state = {email:""};
        };
       UserReg = (event) => {
            this.setState({ [event.target.name] : event.target.value });
        };

        render() {
         return(     
           <div id="class-component-registration">
          <label>First Name:</label>
          <input
          type='text'
          placeholder='write your firstname'
          name='firstName'
          onChange={this.UserReg}
          />
          <label>Last Name:</label>
           <input
           type='text'
           placeholder='write your lastname'
           name='lastName'
           onChange={this.UserReg}
           />
           <label>Country:</label>
           <input
           type='text'
           placemoholder = 'write your contry'
           name='country'
           onChange={this.UserReg}
           />
           <label>Username:</label>
           <input
           type='text'
           placeholder="write your username"
           name='username'
           onChange={this.UserReg}
           />
           <label>Password:</label>
           <input
           type='text'
           placeholder="write your password"
           name='password'
           onChange={this.UserReg}
           />
           <label>Email:</label>
           <input
           type='text'
           placeholder="write your email"
           name='email'
           onChange={this.UserReg}
           />
          
           <p>First Name: {this.state.firstname}</p>
           <p>Last Name: {this.state.lastname}</p>
           <p>Country: {this.state.firstname}</p>
           <p>Username: {this.state.username}</p>
           <p>Password: {this.state.password}</p>
           <p>Email: {this.state.email}</p>
         
           </div>         
         );
         }
        }

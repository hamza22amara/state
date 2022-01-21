
import './App.css';

 import Profil from './Profil';

import React, { Component } from 'react';
import { Button } from 'bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName:"Hamza Amara",
        bio:"GOMYCODE",
        imgSrc:"/Hamza amara.jpg",
        profession:"  Fullstack js  "
      },
      show: false,
      intervall: null,
      timer: 0,
      
    };
  }
  showvisibility =() => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div>
      <Button variant="secondary" onclick={this.showvisibility}>
      {this.state.show ? "hide profile" :"show profile"}</Button>{" "}
      {this.state.show ? (
        <>
        <img src={this.state.person.imgSrc} style={{width:"200px"}} alt=''></img>
        <h3>
welcome I'm{""}
<span style={{color:"#e20751"}}>
{" "}
{this.state.person.fullName}
</span>
        </h3>
        <h3>
  I am  currently learning{" "}    
  <span style={{color:"#e20751"}}>
  {" "}
  {this.state.person.profession}
  
  </span>{" "}
  at{" "}
  <span style={{color:"#e20751"}}>{this.state.person.bio}</span>
        </h3>
        <h4>component's launch time:</h4>
        <Profil/>
      )
      </>
      ):
      (
        <h6>click on the button to show the profile</h6>
        )}
      </div>
      );
  }
}


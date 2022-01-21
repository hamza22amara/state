import React, { Component } from 'react';

export default class Profil extends Component {
    constructor(props) {
        super(props)
        this.state ={
            show: false,
            intervall: null,
            timer: 0,
        };
    }
    componentDidMount(){
        console.log("componentDidMount()");
        this.setState({
            intervall:setInterval(()=> this.setState({timer:this.state.timer +1}),
            1000
            ),
        });
    }
    componentDidUpdate(){
        console.log("componetDidUpdate()");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount()");
        clearInterval(this.state.intervall);
    }
  render() {
    return 
    <div>
    <h2>{this.state.timer}</h2>
    </div>;
  }
}

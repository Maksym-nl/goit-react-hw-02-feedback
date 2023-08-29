import React, { Component } from "react";
import { Feedback } from "./Feedback/feedback";




export class App extends Component {
   state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Feedback/>
      <Statistics/>
    );
  }
}
      
    
    
  

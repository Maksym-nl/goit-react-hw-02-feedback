import PropTypes from "prop-types";
import { Component } from 'react';
import { Button } from './feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = () => {
    this.setState(prevState => ({
       clics: prevState.clicks + 1,
          }));
  };

  render() {
    return (
         <div>
        <Button onClick={this.handleClick} type="button">
          Good:{this.state.clics}
        </Button>
        <Button onClick={this.handleClick} type="button">
          Neutral:{this.state.clics}
        </Button>
        <Button onClick={this.handleClick} type="button">
          Bad:{this.state.clics}
        </Button>
      </div>
      
    );
    
  }
}



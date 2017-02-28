import React, { Component } from 'react';
import './App.css';
import {NewsList} from './components';

const data = [
  {
    title: 'React',
    url:'https://facebook.github.io/react/',
    author:'jordan wilke',
    num_comments:3,
    points:4,
    objectID:0
  },
  {
    title: 'Redux',
    url:'https://github.com/reactjs/redux',
    author:'Dan Abramov,Andrew Clark',
    num_comments:2,
    points:5,
    objectID:1
  }
]
class App extends Component {
  constructor(){
    super()
    this.state={
      link: data
    }
  }
  render() {
    console.log(this.state.link);
    return (
      <NewsList links={this.state.link}/>
    );
  }
}

export default App;

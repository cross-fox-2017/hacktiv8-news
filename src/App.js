import React, { Component } from 'react';
import { List } from './List'

const data = [
  {
    title : 'React',
    url : 'https://facebook.github.io/react/',
    author : 'Jordan Walke',
    num_comments : 3,
    points : 4,
    objectID : 0,
  },
  {
    title : 'Redux',
    url : 'https://github.com/reactjs/redux',
    author : 'Dan Abramov, Andrew Clark',
    num_comments : 2,
    points : 5,
    objectID : 1,
  },
]

class App extends Component {
  constructor(){
    super()
    this.state = {
      data
    }
  }

  render(){
    return(
      <List data={ this.state.data }/>
    )
  }
}

export default App;

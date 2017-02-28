import React, { Component } from 'react';
import {List} from './components/List.js'

const data = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/'
  },
  {
    title: 'Redux',
    url: 'https://github.io/reactjs/redux'
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = {data}
  }
  render() {
    return (
      <List data={this.state.data}/>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          title: 'React',
          url: 'https://facebook.github.io/react/',
          author: 'Jordan Walke',
          objectID: 0
        },
        {
          title: 'Redux',
          url: 'https://github.com/reactjs/redux',
          author: 'Dan Abramov, Andrew Clark',
          objectID: 1
        }
      ]
    }
  }
  render() {
    return (
      <ul>
        {this.state.data.map((item)=>{
          return (
              <li>
                <a href={item.url} target="_blank">{item.title}</a>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default App;

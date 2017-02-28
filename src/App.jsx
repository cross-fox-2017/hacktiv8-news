import React, { Component } from 'react';
import './App.css';

const data = [
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
class App extends Component {
  render() {
    return (
      <ul>
        {data.map((item)=>{
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

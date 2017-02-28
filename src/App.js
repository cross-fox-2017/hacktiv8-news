import React, { Component } from 'react';

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
  render() {
    return (
      <ul>
        {data.map((item,index) => {
          return (
            <li key={index}><a href={item.url} target="_blank">{item.title}</a></li>
          )
        })}
      </ul>
    );
  }
}

export default App;

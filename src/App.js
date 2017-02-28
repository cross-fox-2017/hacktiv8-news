import React, { Component } from 'react'
import './App.css'

const data = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.io/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]
class App extends Component {
  render () {
    return (
      <ul>
        {data.map((item, index) => {
           return (
             <li key={index}>
               <a href={item.url}>
                 {item.title}
               </a>
             </li>
           )
         })}
      </ul>
    )
  }
}

export default App

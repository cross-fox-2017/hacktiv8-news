import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Search } from './components/Search.js'
// import NewsList from './components/NewsList.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: [
        {
          title: 'React',
          url: 'https://facebook.github.io/react/',
          author: 'Jordan Walke',
          num_comments: 3,
          points: 4,
          objectId: 0
        },
        {
          title: 'Redux',
          url: 'https://github.com/reactjs/redux',
          author: 'Dan Abramov, Andrew Clark',
          num_comments: 2,
          points: 5,
          objectId: 1
        }
      ],
      currentSearch: ''
    }
  }

  componentDidMount () {
    fetch(`https://hn.algolia.com/api/v1/search?query=${}`)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data)
      })
  }

  handleChange (e) {
    this.setState({
      currentSearch: e.target.value
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <h1>Hacktiv8 News</h1>
        <Search handleChange={this.handleChange.bind(this)} />
        <ul className='center'>
          {this.state.data
             .filter(item => new RegExp(this.state.currentSearch).test(item.title))
             .map((item, index) => {
               return (
                 <li key={index}>
                   <a href={item.url} target='_blank'>
                     {item.title}
                   </a>
                 </li>
               )
             })}
        </ul>
        
      </div>
    )
  }
}

export default App

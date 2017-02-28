import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {List, Search} from './components/index.jsx'

class App extends Component {
  constructor () {
    super()
    this.state = {
      datas: [
          {
              title: 'React',
              url: 'https://facebook.github.io/react/',
              author: 'Jordan Walke',
              num_comments: 3,
              points: 4,
              objectID: 0
          }, {
              title: 'Redux',
              url: 'https://github.com/reactjs/redux',
              author: 'Dan Abramov, Andrew Clark',
              num_comments: 2,
              points: 5,
              objectID: 1
          }
      ],
      searchKeyword: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      searchKeyword: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hacktiv8 News</h2>
        </div>
        <h3>Search</h3>
        <Search handles={this.handleChange} />
        <List datas={this.state.datas.filter(data => {
            return data.title.toLowerCase().match(this.state.searchKeyword.toLowerCase())
          })
        } />
      </div>
    )
  }
}

export default App;

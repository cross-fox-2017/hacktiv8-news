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
  componentWillMount() {
    console.log('will');
    const appThis = this
    fetch('http://hn.algolia.com/api/v1/search?query=react')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
    // console.log(data);
    setTimeout(() => {
      appThis.setState({
      datas: data.hits
    })}, 0)


    });
  }
  componentDidMount() {
    console.log('did');
  }

  handleChange (e) {
    this.setState({
      searchKeyword: e.target.value
    })
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hacktiv8 News</h2>
        </div>
        <h3>Search</h3>
        <Search handles={this.handleChange} />
        <List datas={this.state.datas.filter(data => {
            // console.log(data.title.toLowerCase());
            return data.title.toLowerCase().indexOf(this.state.searchKeyword.toLowerCase()) !== -1
          })
        } />
      </div>
    )
  }
}

export default App;

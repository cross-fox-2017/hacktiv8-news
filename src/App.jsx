import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import {Search, NewsList} from './components'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          title: 'React',
          url: 'https://facebook.github.io/react/',
          author: 'Jordan Walke',
          id: 0
        },
        {
          title: 'Redux',
          url: 'https://github.com/reactjs/redux',
          author: 'Dan Abramov, Andrew Clark',
          id: 1
        }
      ],
      search: '.'
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleForm(event){
    event.preventDefault()
  }
  handleChange(event){
    this.setState({
      search: event.target.value
    })
  }
  cekSearch(item){
    let cut = new RegExp(`${this.state.search}`, 'i')
    return cut.test(item)
  }
  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <br></br>
        <Search handleChange={this.handleChange} handleForm={this.handleForm}/>
        <NewsList list={this.state.data.filter(item => this.cekSearch(item.title))} />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import {List} from './components/List'
import {Form} from './components/Form'



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
    this.state = {
      data,
      keyword: ''
    }
  }

  searchTitle (event) {
    this.setState({
      keyword: event.target.value
    })
    fetch(`http://hn.algolia.com/api/v1/search?query=${event.target.value}`)
    .then(res => res.json())
    .then(data => this.setState ({data: data.hits}))
  }



  render() {
    return (
      <div>
        <List data={this.state.data.filter(results=> (results.title === null ? '' : results.title).match(new RegExp(this.state.keyword,'i')))}/>
        <Form searchTitle={this.searchTitle.bind(this)} keyword={this.state.keyword}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { List } from './List';
import { Form } from './Form';

const data = []

class App extends Component {
  constructor(){
    super()
    this.state = {
      data,
      search : ''
    }
  }

  searchTitle (e) {

    fetch(`http://hn.algolia.com/api/v1/search?query=${e.target.value}`)
        .then(res => res.json())
        .then(data => this.setState ({data: data.hits}))
  }

  render(){

    return(
      <div>
        <Form searchTitle={this.searchTitle.bind(this)} search={this.state.handleChange} />
        <List data={this.state.data.filter( result => {
            const title = result.title === null ? '' : result.title;
            if (title !== '') return title.toLowerCase().match(this.state.search.toLowerCase())
          }
        )} />
      </div>
    )
  }
}

export default App;

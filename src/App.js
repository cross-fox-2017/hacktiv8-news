import React, { Component } from 'react';
import { List } from './List';
import { Form } from './Form';

const data = [
  {
    title : 'React',
    url : 'https://facebook.github.io/react/',
    author : 'Jordan Walke',
    num_comments : 3,
    points : 4,
    objectID : 0,
  },
  {
    title : 'Redux',
    url : 'https://github.com/reactjs/redux',
    author : 'Dan Abramov, Andrew Clark',
    num_comments : 2,
    points : 5,
    objectID : 1,
  },
]

class App extends Component {
  constructor(){
    super()
    this.state = {
      data,
      search : ''
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  searchTitle (e) {
    this.setState({
      search : e.target.value
    })
  }

  render(){

    // if(search > 0){
    //   var libraries = data.filter( (l) => {
    //     return l.title.toLowerCase().match(search)
    //   })
    // }

    return(
      <div>
        <Form searchTitle={this.searchTitle.bind(this)} search={this.state.handleChange} />
        <List data={this.state.data.filter( result => result.title.toLowerCase().match(this.state.search.toLowerCase()))} />
      </div>
    )
  }
}

export default App;

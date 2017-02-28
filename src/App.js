import React, { Component } from 'react';
import './App.css';
import {NewsList,NewsForm} from './components';


class App extends Component {
  constructor(){
    super()
    this.state={
      link: [
        {
          title: 'React',
          url:'https://facebook.github.io/react/',
          author:'jordan wilke',
          num_comments:3,
          points:4,
          objectID:0
        },
        {
          title: 'Redux',
          url:'https://github.com/reactjs/redux',
          author:'Dan Abramov,Andrew Clark',
          num_comments:2,
          points:5,
          objectID:1
        }
      ],
      searchLink:''
    }
  }

  handleChange(event){
    this.setState({
      searchLink: event.target.value
    })
  }
  render() {
    console.log(this.state.link);
    return (
      <div>
        <NewsForm handleChange={this.handleChange.bind(this)} value={this.state.searchLink}/>
        <NewsList links={this.state.link.filter((x)=>{return x.title.toLowerCase().match(this.state.searchLink.toLowerCase())})}/>
      </div>
    );
  }
}

export default App;

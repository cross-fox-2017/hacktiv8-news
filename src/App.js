import React, {Component} from 'react';
import './App.css';
import List from './List.jsx'

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
      ]
    }
  }

  render() {
    return (
      <div>
        <List datas={this.state.datas} />
      </div>
    )
  }
}

export default App;

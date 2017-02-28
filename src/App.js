import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Hacktiv8 News</h2>
                </div>
                <div className="details">
                    <ul>
                        {data.map((item) => {
                            return (
                                <li key={item.objectID}><a href={item.url} target="_blank">{item.title}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;

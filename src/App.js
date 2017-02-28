import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {SearchNews} from './components/Search'

// const hasil = [
//     {
//         title: 'React JS',
//         url: 'https://facebook.github.io/react',
//         author: 'Jordan Walke',
//         num_comments: 3,
//         points: 4,
//         objectID: 0
//     }, {
//         title: 'Redux',
//         url: 'https://github.com/reactjs/redux',
//         author: 'Dan Abramov',
//         num_comments: 2,
//         points: 5,
//         objectID: 1
//     }
// ]

class App extends Component {
    constructor() {
        super()
        this.state = {
            news: [],
        }
    }

    handleChange(e) {
        // this.setState({searchNews: e.target.value})
        this.search(e.target.value)
    }

    search(input) {
        fetch(`https://hn.algolia.com/api/v1/search?query=${input}`, {method: 'get'}).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({news: data.hits})
        });
    }
    render() {
      //release 1, isi dari <ul>
      // {this.state.news.filter((data) => {
      //     return data.title.toLowerCase().match(`${this.state.searchNews}`.toLowerCase())
      // }).map((item) => {
      //     return (
      //         <li key={item.objectID}>
      //             <a href={item.url} target="_blank">{item.title}</a>
      //         </li>
      //     )
      // })}
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Hacktiv8 News</h2>
                </div>
                <br></br>
                <SearchNews handleChange={this.handleChange.bind(this)}/>
                <div className="details">
                    <ul>
                        {this.state.news.map((item) => {
                            return (
                                <li key={item.objectID}>
                                    <a href={item.url} target="_blank">{item.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;

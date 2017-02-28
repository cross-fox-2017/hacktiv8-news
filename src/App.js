import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { DataList, DataSearch } from './components'

class App extends Component {
  constructor () {
    super()
    this.state = {
      news: [
        {
          title: 'React',
          url: 'https://facebook.github.io/react',
          author: 'Jordan Walke',
          num_comments: 3,
          points: 4,
          objectID: 0
        },
        {
          title: 'Redux',
          url: 'https://github.io/reactjs/redux',
          author: 'Dan Abramov, Andrew Clark',
          num_comments: 2,
          points: 5,
          objectID: 1
        }
      ],
      searchKey: ''
    }
  }
  handleChange (event) {
    this.setState({
      searchKey: event.target.value
    })
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h6>Welcome to React</h6>
        </div>
        <div className='News-list'>
          <DataSearch handleChange={this.handleChange.bind(this)} />
          <DataList news={this.state.news.filter((eachNews) => (eachNews.title).match(new RegExp(this.state.searchKey, 'i')))} />
        </div>
      </div>
    )
  }
}

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       todos: data,
//       currentTodo: ''
//     }
//   }
//   handleChange (event) {
//     this.setState({
//       currentTodo: event.target.value
//     })
//   }
//   handleForm (event) {
//     event.preventDefault()
//     const newId = generateId()
//     const newTodo = {id: newId, text: this.state.currentTodo, isCompleted: false}
//     const updatedTodo = addTodo(this.state.todos, newTodo)
//     this.setState({
//       todos: updatedTodo,
//       currentTodo: ''
//     })
//   }
//   render () {
//     return (
//       <div className='App'>
//         <div className='App-header'>
//           <img src={logo} className='App-logo' alt='logo' />
//           <h2>React Todo</h2>
//         </div>
//         <div className='Todo-App'>
//           <TodoForm handleChange={this.handleChange.bind(this)} currentTodo={this.state.currentTodo} handleForm={this.handleForm.bind(this)} />
//           <TodoList todos={this.state.todos} />
//         </div>
//       </div>
//     )
//   }
// }

export default App

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {List} from './components/List';
import {Form} from './components/Form';
import {ListSearch} from './components/ListSearch';

// fetch('https://hn.algolia.com/api/v1/search?query=node')
// .then(function(res) {
//   return res.json()
// })
// .then(function(data) {
// 	console.log(data.hits)
// });

// example of fatch javascript, it is just like jquery ajax, axios, super agent, and many more....
// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default',
//                body: {bookid: 1, url: 'good', author: 'good'} };
//
// fetch('flowers.jpg', myInit)
// .then(function(response) {
//   return response.blob();
// })
// .then(function(myBlob) {
//   var objectURL = URL.createObjectURL(myBlob);
//   myImage.src = objectURL;
// });

// data manual
// var datas = [
//   {title: 'React', url:'https://docs.google.com/presentation/d/1g07sCw0gfOctTMN1DpICwQpfbFZyBrlGXBgZGvaSma8/edit#slide=id.p', author: 'jordan walke'},
//   {title: 'facebook', url:'https://docs.google.com/presentation/d/1g07sCw0gfOctTMN1DpICwQpfbFZyBrlGXBgZGvaSma8/edit#slide=id.p', author: 'yoni skywalker'}
// ]

// how to
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <ul>
//           {datas.map(function(data, index){
//             return (
//               <li key={index}><a href={data.url}>{data.title}</a></li>
//             )
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

class App extends Component {
  // data state
  constructor () {
    super()
    this.state = {
      datas: [
        {blogid: 1, title: 'React', url:'https://docs.google.com/presentation/d/1g07sCw0gfOctTMN1DpICwQpfbFZyBrlGXBgZGvaSma8/edit#slide=id.p', author: 'jordan walke'},
        {blogid: 2, title: 'facebook', url:'https://docs.google.com/presentation/d/1g07sCw0gfOctTMN1DpICwQpfbFZyBrlGXBgZGvaSma8/edit#slide=id.p', author: 'yoni skywalker'}
      ],
      currentTitle: '',
      currentFetch: '',
      listFetch:[]
    }
  }

  /* form.jsx | onSubmit | form */
  // handleForm (event) {
  //   event.preventDefault()
  //   const newId = generateId()
  //   const newTodo = {id: newId, text: this.state.currentTodo, isCompleted: false}
  //   const updatedTodo = addTodo(this.state.todos, newTodo)
  //   this.setState({
  //     todos: updatedTodo,
  //     currentTodo: ''
  //   })
  // }

  /* form.js | hendelChange | input */
  handleChange (event) {
     this.setState({
       currentTitle: event.target.value
     })
   }

   handleFetch(event){
     this.setState({
       currentFetch: event.target.value
     })
     this.search(event.target.value)
   }

   search(query){
     fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
     .then(res=>
        res.json()
     )
     .then((data)=>{
       console.log(data);
       this.setState({
         listFetch : data.hits
       })
     });
   }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Form handleChange={this.handleChange.bind(this)}/>
        <List datas={ this.state.datas.filter((title)=>{
            return title.title.toLowerCase().match(this.state.currentTitle.toLowerCase())
          }) }
        />


        <p>fetch hacker news : <input type="text" onChange={this.handleFetch.bind(this)}/></p>
        <ListSearch dataSearch={this.state.listFetch} />


      </div>
    )
  }
}

export default App;

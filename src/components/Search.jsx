import React from 'react'

export class Search extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <form onSubmit={this.props.handleForm}>
        <label>Search : </label>
        <input type="text" onChange={this.props.handleChange}></input>
      </form>
    )
  }
}

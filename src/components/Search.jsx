import React from 'react'

export const Search =  (props) => {
  return (
    <form onSubmit={this.props.handleForm}>
      <label>Search : </label>
      <input type="text" onChange={this.props.handleChange}></input>
    </form>
  )
}

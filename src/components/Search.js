import React from 'react'

export const SearchNews = (props) =>{
  return (
    <form onSubmit={props.handleForm}>
      <input type='text' value={props.currentSearch} onChange={props.handleChange} />
    </form>
  )
}

SearchNews.propTypes = {
  // currentSearch: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired
}

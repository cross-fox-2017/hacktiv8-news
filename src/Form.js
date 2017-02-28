import React from 'react';

export const Form = (props) => {
  return(
    <form>
      <input onChange={props.searchTitle} value={props.search} placeholder="search here"></input>
    </form>
  )
}

import React from 'react';

export const Form = (props) => {
  return (
    // onSubmit={props.handleForm}
    <form>
      <input type="text" value={props.currentTitle} onChange={props.handleChange}></input>
    </form>
    )

}

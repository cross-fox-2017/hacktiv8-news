import React from 'react';

export const List = (props) => {
  return(
    <ul>
      { props.data.map( (item,index) => {
          return(
            <li key={ index }><a href={ item.url }>{item.title}</a></li>
          )
        })
      }
    </ul>
  )
}

import React from 'react'

export const NewsList = (props) =>{
  return (
    <div>
          <li key={item.objectID}><a href={item.url} target="_blank">{item.title}</a></li>
    </div>
  )
}


NewsList.propTypes = {
  todos: React.PropTypes.array.isRequired
}

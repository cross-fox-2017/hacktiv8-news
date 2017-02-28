import React from 'react'

export const NewsList = (props) =>{
  return (
    <div className="details">
        <ul>
            {props.news.map((item) => {
                return (
                    <li key={item.objectID}>
                        <a href={item.url} target="_blank">{item.title}</a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

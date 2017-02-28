import React from 'react'

const List = (props) => {
  return (
    <span>
      {
        props.datas.map((data, index) => {
          return(
            <p key={index}>
              <a href={data.url} target="_blank">
                {data.title}
              </a>
            </p>
          )
        })
      }
    </span>
  )
}

export default List

import React from 'react'

const List = (props) => {
  // console.log(props.datas);
  return (
    <ul>
      {
        props.datas.map((data, index) => {
          return(
            <li key={index}>
              <a href={data.url} target="_blank">
                {data.title}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default List

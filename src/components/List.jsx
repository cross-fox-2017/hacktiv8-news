import React from 'react';

export const List = (props) => {
  return (
    <ul>
      { // ini bracket nya
        props.datas.map(function(data){ // ini logic javascript maka harus di bungkus dengan bracket
          return(
            <li key={data.blogid}><a href={data.url} target="_blank">{data.title}</a></li>
          )
        })
      } // ini bracket nya
    </ul>
    )

}

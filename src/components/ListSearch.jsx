import React from 'react';
// import axios from 'axios';

export const ListSearch = (props) => {

  return (

      <ul>
        {
          props.dataSearch.map((data, index)=>{
            return (
              <li key={index}><a href={data.url} target="_blank">{data.title}</a></li>
            )
          })
        }
      </ul>

    )
}

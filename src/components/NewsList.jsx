import React from 'react'

export class NewsList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <ul>
        {this.props.list.map((item)=>{
          return (
              <li key={item.id}>
                <a href={item.url} target="_blank">{item.title}</a>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

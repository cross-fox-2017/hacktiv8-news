import React from 'react'

const styles = {
  width: '50%'
}

export const DataSearch = (props) => {
  return (
    <form>
      <input style={styles} type='text' onChange={props.handleChange} />
    </form>
  )
}

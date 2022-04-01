import React from 'react'

const IconButton = props => {
  return props.hide ? null : (
    <button
      className={`btn btn-${props.style}`}
      onClick={props.onClick}
    >
      <i className={`fa fa-${props.icon}`}></i>
    </button>
  )
}

export default IconButton
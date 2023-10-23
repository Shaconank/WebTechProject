import React from 'react'
import './FilterItem.css'
export default function (item) {
  return (
    <div className='filterItem'>
        <img src = {item.source} className='filterImage'/>
        <div className='filterText'>{item.title}</div>
    </div>
  )
}

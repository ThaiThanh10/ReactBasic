import React from 'react'
import Item from './Item'

export default function Products(props) {
  return (
    <div className='heading'>
        <h2>{props.heading}</h2>
        <div className='product-item'>
            <Item name='Iphone' price='23tr '  />
            <Item name='Samsung' price='20tr '  />
            <Item name='Xiaomi' price='16tr '  />
            <Item name='Redmi' price='18tr '  />
        </div>
    </div>
  )
}

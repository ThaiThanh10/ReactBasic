import React from 'react'

export default function Item(props) {
    return (
        <div>
            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/d3/4c/f2/9abc8ba0691f4348676e0c30805d5cca.png.webp" alt="" />
            <p>{props.name}</p>
            <p className='price'>{props.price}</p>
        </div>
    )
}

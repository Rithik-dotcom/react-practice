import React from 'react'

const Child = (props) => {

    return (
        <div>
            <h3>{props.attribute}</h3>
            <img src={props.imagesA} alt='none' height='200px' width='200px' />
        </div>
    )
}

export default Child
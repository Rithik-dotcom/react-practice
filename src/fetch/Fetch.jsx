import React, { useState } from 'react'
import Fetchcard from './Fetchcard'

const Fetch = () => {
    const [initialState, UpdatedState] = useState([])

    fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((jsonResponse) => UpdatedState(jsonResponse))


    return (
        <div className='container '>
            <div className='row '>
                
                    {initialState.map((x, key) => (<Fetchcard className='col-4' item={x} />))}
               
            </div>


        </div>
    )
}

export default Fetch
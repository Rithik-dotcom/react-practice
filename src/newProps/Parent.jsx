import React from 'react'
import Child from './Child'
import { data } from './data'
import './props.css'
const Parent = () => {
    return (
        <div className='design' ><Child attribute={data[0].discription} imagesA ={data[0].myimage}/>
            <Child attribute={data[1].discription} imagesA ={data[1].myimage} />
        </div>
    )
}

export default Parent
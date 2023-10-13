import React from 'react'

const Fetchcard = (props) => {
    var images = props.item.image
    return (
        
            <div className="card" style={{width: '12rem'}}>
                <img src={props.item.image} className="card-img-top" alt="none" />
                    <div class="card-body">
                        <h5 className="card-title">{props.item.title}</h5>
                        <p style={{textoverflow: 'ellipsis'}} className="card-text">{props.item.description}</p>
                        <a href="#" className="btn btn-primary">Buy-Now</a>
                    </div>
            </div>
        
    )
}

export default Fetchcard
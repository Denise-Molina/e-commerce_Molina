import React from "react"

const ItemDetail = ({title, price, detail}) =>{
    return (
        <div>
            <h2> {title} </h2>
            <h3> {price} </h3>
            <p> {detail} </p>
        </div>
    )
}

export default ItemDetail;
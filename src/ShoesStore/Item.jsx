import React, { Component } from 'react'

export default class extends Component {
    render() {
        const {id,name,alias,price,description,shortDescription,quantity,image} = this.props.element;
        return (
            <>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center text-light bg-dark p-1 rounded-pill">{name}</h5>
                    <p className="card-text text-center" style={{ fontSize: "18px", fontWeight: "bold", color: "red" }}>{price}$</p>
                    <button onClick={()=>this.props.getDetailShoes(this.props.element)} className="btn btn-info"><i className="fab fa-readme mr-2" />Detail Shoes</button>
                    <button onClick={()=>{this.props.addToCartShoes(id,this.props.element)}} className="btn btn-warning"><i className="fa fa-cart-plus mr-2" />Add To Cart</button>
                </div>
            </>
        )
    }
}

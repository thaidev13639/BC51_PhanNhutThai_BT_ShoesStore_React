import React, { Component } from 'react'

export default class CartStore extends Component {
    renderProductCart = () => {
        return this.props.listCartShoes.map((element,index) => {
            return <tr key={index}>
                <td>{element.id}</td>
                <td>
                    <img
                        width={50}
                        src={element.image}
                        className="img-fluid"
                        alt="phone"
                    />
                </td>
                <td>{element.name}</td>
                <td className='d-flex'>
                    <button onClick={()=>this.props.handleQuantity(element.id,false)} className="btn btn-warning">-</button>
                    <span className="mx-1">{element.soLuong}</span>
                    <button onClick={()=>this.props.handleQuantity(element.id,true)} className="btn btn-warning">+</button>
                </td>
                <td>{element.price}</td>
                <td>{element.price * element.soLuong}</td>
                <td>
                    <button onClick={()=>this.props.removeFromCart(element.id)} className="btn btn-danger">Remove</button>
                </td>
            </tr>
        })
    }
    render() {
        // console.log(this.props.listCartShoes)
        return (
            <>
                <div className="d-flex justify-content-end mb-2 fixed-top">
                    <button
                        type="button"
                        className="btn btn-success btn-lg"
                        data-toggle="modal"
                        data-target="#gioHang"
                    >
                        Cart Store ({this.props.listCartShoes.length})
                    </button>
                </div>
                <div
                    className="modal fade"
                    id="gioHang"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="modelTitleId"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Cart Store</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product Code</th>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderProductCart()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

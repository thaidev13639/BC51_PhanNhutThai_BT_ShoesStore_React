import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        const {id,name,alias,price,description,shortDescription,quantity,image} = this.props.shoesDetail
        return (
            <>
                <div className="row mb-5">
                    <div className="col-12">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="false">Home</a>
                            <a className="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">Store</a>
                        </div>
                    </div>
                    <div className="card col-12 fixed-bottom ml-3 overflow-auto" style={{ width: '22rem', height: "70%" }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-light bg-dark pl-2">{name}</h5>
                            <p className="card-text"> <span style={{ fontWeight: "bold" }}>Description :</span> {description}</p>
                            <p> <span style={{ fontWeight: "bold" }}>ShortDescription :</span> {shortDescription}</p>
                            <p> <span style={{ fontWeight: "bold" }}>Quantity in Store :</span> {quantity} pc</p>
                            <p style={{ fontWeight: "bold" }}>Price: <span style={{ color: "red" }}>{price}$</span> </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

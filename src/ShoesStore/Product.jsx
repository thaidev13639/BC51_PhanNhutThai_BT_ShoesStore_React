import React, { Component } from 'react'
import Item from './Item'

export default class Product extends Component {
    renderProduct = () => {
        return this.props.Data.map((element, index) => {
            return <div key={element.id} className="card col-4 rounded-lg" style={{ width: '18rem' }}>
                        <Item  element={element} getDetailShoes={this.props.getDetailShoes} addToCartShoes={this.props.addToCartShoes}/>
                    </div>
        })
    }
    render() {
        // console.log(this.props.Data)
        return (
            <div className='row container justify-content-between'>
                
                {this.renderProduct()}
            
            </div>
        )
    }
}

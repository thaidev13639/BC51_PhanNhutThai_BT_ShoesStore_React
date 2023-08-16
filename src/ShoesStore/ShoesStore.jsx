import React, { Component } from 'react'
import CartStore from './CartStore'
import NavBar from './NavBar'
import Product from './Product'
import Data from "../dataShoes/dataShoes.json"

export default class ShoesStore extends Component {
  state = {
    shoesDetail: Data[0],
    listCartShoes: [],
  }
  getDetailShoes = (shoes) => {
    this.setState({
      shoesDetail: shoes
    })
  }

  addToCartShoes = (id, shoes) => {
    const data = [...this.state.listCartShoes];

    const index = this.state.listCartShoes.findIndex((element) => {
      return element.id === id;
    })

    if (index === -1) {
      data.push({ ...shoes, soLuong: 1 })
    } else {
      data[index].soLuong++;
    }

    this.setState({
      listCartShoes: data
    })
  }

  removeFromCart = (id) => {
    const data = [...this.state.listCartShoes];

    const index = this.state.listCartShoes.findIndex((element) => {
      return element.id === id;
    });

    const resultRemove = window.confirm(`Are you want remove ( ${data[index].name} ) without cart??`)

    if (resultRemove) {
      data.splice(index, 1);
    }

    this.setState({
      listCartShoes: data
    })
  }

  handleQuantity = (id, isIncrease) => {
    const data = [...this.state.listCartShoes];
    const index = this.state.listCartShoes.findIndex((element) => {
      return element.id === id;
    });

    if (isIncrease) {
      data[index].soLuong++
    } else {
      if (data[index].soLuong === 1) {
        const resultConfirm = window.confirm(`Are you want remove ( ${data[index].name} ) ?? `)
        if (resultConfirm) {
          data.splice(index, 1);
        }
      } else {
        data[index].soLuong--
      }
    }

    this.setState({
      listCartShoes: data
    })
  }
  render() {
    return (
      <div className='row'>
        <div className='col cart align-self-end'>

          <CartStore
            listCartShoes={this.state.listCartShoes}
            removeFromCart={this.removeFromCart}
            handleQuantity={this.handleQuantity}
          />

        </div>

        <div className='col-12 header text-center text-danger py-3'>
          <h1>Shoes Store</h1>
        </div>

        <div className='col-3 navBar'>

          <NavBar shoesDetail={this.state.shoesDetail} />

        </div>

        <div className='col-9 product'>

          <Product Data={Data} getDetailShoes={this.getDetailShoes} addToCartShoes={this.addToCartShoes} />

        </div>
      </div>
    )
  }
}

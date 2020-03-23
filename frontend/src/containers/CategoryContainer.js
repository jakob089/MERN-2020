import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import callApi from '../utils/callApi';
import { addTodo, addTodoRequest, getProductsRequest } from '../actions'
import Category from '../pages/category/Category';

function CategoryContainer(props) {
  useEffect(() => {
    props.onGetProducts();
  }, [])

  const showProducts = () => {
    if (props.products.length > 0) {
      return props.products.map((product) => {
        return (
          <div className="col-md-6 col-lg-4">
            <div className="card text-center card-product">
              <div className="card-product__img">
                <img className="card-img" src={`img/product/${product.original_image}`} alt="" />
                <ul className="card-product__imgOverlay">
                  <li><button><i className="ti-search"></i></button></li>
                  <li><button><i className="ti-shopping-cart"></i></button></li>
                  <li><button><i className="ti-heart"></i></button></li>
                </ul>
              </div>
              <div className="card-body">
                <p>{product.category}</p>
                <h4 className="card-product__title"><a href="#">{product.name}</a></h4>
                <p className="card-product__price">${product.price}</p>
              </div>
            </div>
          </div>
        )
      })
    }
  }

  return (
    <Category showProducts={showProducts} />
  );
}

function mapStateToProps(state) {
  return { products: state.product }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetProducts: () => dispatch(getProductsRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);

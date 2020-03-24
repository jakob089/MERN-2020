import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import callApi from './../../utils/callApi';
import { addTodo, addTodoRequest, getProductsRequest } from './../../actions'

function Category(props) {

  return (
    <div className="category">
      <section className="blog-banner-area" id="category">
        <div className="container h-100">
          <div className="blog-banner">
            <div className="text-center">
              <h1>Shop Category</h1>
              <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Shop Category</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin--small mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5">
              <div className="sidebar-categories">
                <div className="head">Browse Categories</div>
                <ul className="main-categories">
                  <li className="common-filter">
                    <form action="#">
                      <ul>
                        { props.showCategories() }
                      </ul>
                    </form>
                  </li>
                </ul>
              </div>
              <div className="sidebar-filter">
                <div className="top-filter-head">Product Filters</div>
                <div className="common-filter">
                  <div className="head">Brands</div>
                  <form action="#">
                    <ul>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand" /><label for="apple">Apple<span>(29)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="asus" name="brand" /><label for="asus">Asus<span>(29)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="gionee" name="brand" /><label for="gionee">Gionee<span>(19)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="micromax" name="brand" /><label for="micromax">Micromax<span>(19)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand" /><label for="samsung">Samsung<span>(19)</span></label></li>
                    </ul>
                  </form>
                </div>
                <div className="common-filter">
                  <div className="head">Color</div>
                  <form action="#">
                    <ul>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color" /><label for="black">Black<span>(29)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="balckleather" name="color" /><label for="balckleather">Black
                      Leather<span>(29)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="blackred" name="color" /><label for="blackred">Black
                      with red<span>(19)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="gold" name="color" /><label for="gold">Gold<span>(19)</span></label></li>
                      <li className="filter-list"><input className="pixel-radio" type="radio" id="spacegrey" name="color" /><label for="spacegrey">Spacegrey<span>(19)</span></label></li>
                    </ul>
                  </form>
                </div>
                <div className="common-filter">
                  <div className="head">Price</div>
                  <div className="price-range-area">
                    <div id="price-range"></div>
                    <div className="value-wrapper d-flex">
                      <div className="price">Price:</div>
                      <span>$</span>
                      <div id="lower-value"></div>
                      <div className="to">to</div>
                      <span>$</span>
                      <div id="upper-value"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7">
              <div className="filter-bar d-flex flex-wrap align-items-center">
                <div className="sorting">
                  <select>
                    <option value="1">Default sorting</option>
                    <option value="1">Default sorting</option>
                    <option value="1">Default sorting</option>
                  </select>
                </div>
                <div className="sorting mr-auto">
                  <select>
                    <option value="1">Show 12</option>
                    <option value="1">Show 12</option>
                    <option value="1">Show 12</option>
                  </select>
                </div>
                <div>
                  <div className="input-group filter-bar-search">
                    <input type="text" placeholder="Search" />
                    <div className="input-group-append">
                      <button type="button"><i className="ti-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <section className="lattest-product-area pb-40 category-list">
                <div className="row">
                  {props.showProducts()}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="related-product-area">
        <div className="container">
          <div className="section-intro pb-60px">
            <p>Popular Item in the market</p>
            <h2>Top <span className="section-intro__style">Product</span></h2>
          </div>
          <div className="row mt-30">
            <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
              <div className="single-search-product-wrapper">
                <div className="single-search-product d-flex">
                  <a href="#"><img src="img/product/product-sm-1.png" alt="" /></a>
                  <div className="desc">
                    <a href="#" className="title">Gray Coffee Cup</a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#"><img src="img/product/product-sm-2.png" alt="" /></a>
                  <div className="desc">
                    <a href="#" className="title">Gray Coffee Cup</a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#"><img src="img/product/product-sm-3.png" alt="" /></a>
                  <div className="desc">
                    <a href="#" className="title">Gray Coffee Cup</a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
              <div className="single-search-product-wrapper">
                <div className="single-search-product d-flex">
                  <a href="#"><img src="img/product/product-sm-4.png" alt="" /></a>
                  <div className="desc">
                    <a href="#" className="title">Gray Coffee Cup</a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#"><img src="img/product/product-sm-5.png" alt="" /></a>
                  <div className="desc">
                    <a href="#" className="title">Gray Coffee Cup</a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#"><img src="img/product/product-sm-6.png" alt="" /></a>
                  <div className="desc">
                    <a href="#" className="title">Gray Coffee Cup</a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
              <div className="single-search-product-wrapper">
                <div className="single-search-product d-flex">
                  <a href="#"><img src="img/product/product-sm-7.png" alt="" /></a>
                  <div className="desc">
                    <a href="#" className="title">Gray Coffee Cup</a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#"><img src="img/product/product-sm-8.png" alt="" /></a>
                  <div className="desc">
                    <a href="#" className="title">Gray Coffee Cup</a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#"><img src="img/product/product-sm-9.png" alt="" /></a>
                  <div className="desc">
                    <a href="#" className="title">Gray Coffee Cup</a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
              <div className="single-search-product-wrapper">
                <div className="single-search-product d-flex">
                  <a href="#"><img src="img/product/product-sm-1.png" alt="" /></a>
                  <div className="desc">
                    <a href="#" className="title">Gray Coffee Cup</a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#"><img src="img/product/product-sm-2.png" alt="" /></a>
                  <div className="desc">
                    <a href="#" className="title">Gray Coffee Cup</a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
                <div className="single-search-product d-flex">
                  <a href="#"><img src="img/product/product-sm-3.png" alt="" /></a>
                  <div className="desc">
                    <a href="#" className="title">Gray Coffee Cup</a>
                    <div className="price">$170.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;

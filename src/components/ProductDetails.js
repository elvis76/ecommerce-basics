import React, { useState } from 'react'
import { productData } from './ProductShowcase'
import PlusIcon from '../assests/ecommerce-product-page-main/ecommerce-product-page-main/images/icon-plus.svg'
import MinusIcon from '../assests/ecommerce-product-page-main/ecommerce-product-page-main/images/icon-minus.svg'
import CartIcon from '../assests/ecommerce-product-page-main/ecommerce-product-page-main/images/icon-cart.svg'

const ProductDetails = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className="product-details">
           <h4>{productData.company}</h4>
           <h1>{productData.productName}</h1>
           <p>{productData.description}</p>
           <div className="current-price">
               <h2>${productData.price.toFixed(2)}</h2>
               <span>{productData.discount}</span>
           </div>
           <div className="original-price">
               ${productData.originalPrice}
           </div>
           <div className="action-bar">
               <div className="counter">
                   <button onClick={() => counter !== 0 && setCounter(counter - 1)}>
                       <img src={MinusIcon} alt="" />
                   </button>
                   <span>{counter}</span>
                   <button onClick={() => setCounter(counter + 1)}>
                       <img src={PlusIcon} alt="" />
                   </button>
               </div>
               <button id="add">
                   <img src={CartIcon} alt="" />
                   <span>Add to cart</span>
               </button>
           </div>
        </div>
    )
}

export default ProductDetails

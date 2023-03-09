import React from "react";
import { useParams } from 'react-router-dom'
import listProduct from '../products/mockProducts.json';

const searchObj = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) return arr[i];
    }
}

export const ProductById = () => {

    let { productId } = useParams();

    const product = searchObj(listProduct, productId);

    console.log(product);
    return (

        <div className="product">
            <div className="slideImg"> 
                <img src={product.imageUrl} />
             </div>
            <h1> {product.nameProduct} <span> {productId}</span> </h1>;
            <div>
                {product.description}
            </div>

        </div>

    )
   
}
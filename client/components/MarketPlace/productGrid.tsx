import React from 'react';
import ReadyToShipProducts from './readyToShipProducts';
import CustomizableProduct from './customizableProducts';
import ProductCard from '../Home/FlashSales/flash-sales-card';
import { ProductsList } from '../Home/FlashSales/products';

const ProductGrid = () => {
    return (
      <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ProductsList.map((product, index) => {
            let className = "rounded-lg";
            if (index === 0 || index === 2) {
                className += " col-span-1 sm:col-span-2 md:col-span-3";
            }
          return (
            <div className={`${className} flex justify-center`}>
              {index === 0 ? (
                <ReadyToShipProducts />
              ) : index === 2 ? (
                <CustomizableProduct />
              ) : (
                <ProductCard
                    key={index}
                    percent={product.percent}
                    image={product.image}
                    imageAlt={product.imageAlt}
                    name={product.name}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    rating={product.rating}
                    vote={product.vote}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ProductGrid;
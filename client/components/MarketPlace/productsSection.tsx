"use client";
import React, { useState, useEffect } from 'react';
import ProductCard from '../Home/FlashSales/flash-sales-card';
import { ProductsList } from '../Home/FlashSales/products';
import { FaMobileAlt, FaHeartbeat, FaIndustry, FaTshirt, FaShoppingCart, FaWrench, FaCouch, FaSpa } from 'react-icons/fa'; // Example icons

const productTypes: { type: string; icon: React.ElementType }[] = [
    { type: "Electronics", icon: FaMobileAlt },
    { type: "Health and Beauty", icon: FaSpa },
    { type: "Industrial", icon: FaIndustry },
    { type: "Fashion", icon: FaTshirt },
    { type: "Groceries and Raw material", icon: FaShoppingCart },
    { type: "Maintenance and Operation", icon: FaWrench },
    { type: "Furniture", icon: FaCouch },
];

const OurProductsSection: React.FC = () => {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>(ProductsList as any[]);

    const toggleType = (type: string) => {
        setSelectedTypes(prevSelectedTypes =>
            prevSelectedTypes.includes(type)
                ? prevSelectedTypes.filter(t => t !== type)
                : [...prevSelectedTypes, type]
        );
    };

    useEffect(() => {
        if (selectedTypes.length === 0) {
            setFilteredProducts(ProductsList);
        } else {
            setFilteredProducts(
                (ProductsList).filter(product =>
                    selectedTypes.includes(product?.type ?? '')
                )
            );
        }
    }, [selectedTypes]);

    return (
        <div className="flex justify-center">
            <div className="mt-32 flex flex-col align-center w-fit">
                <span className="text-lg md:text-2xl lg:text-3xl pl-20 lg:pl-10 mb-6">Explore Our Products</span>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {productTypes.map(({ type, icon: Icon }) => (
                        <button
                            key={type}
                            className={`p-2 border w-40 rounded flex flex-col items-center justify-center ${selectedTypes.includes(type) ? 'bg-blue-500 text-white' : 'bg-white text-primary'}`}
                            onClick={() => toggleType(type)}
                        >
                            <Icon size={30} />
                            <span className={`${selectedTypes.includes(type) ? 'text-white' : 'text-black'}`}>{type}</span>
                        </button>
                    ))}
                </div>
                <div className="w-full flex justify-center mt-8">
                    <div style={{ maxWidth: '1400px' }} className="flex flex-wrap p-4 pl-20 lg:pl-10 gap-12 justify-start">
                        {filteredProducts.map((product, index) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProductsSection;

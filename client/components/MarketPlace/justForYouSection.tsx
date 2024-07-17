import ProductCard from "../Home/FlashSales/flash-sales-card";
import { ProductsList } from "../Home/FlashSales/products";

const JustForYouSection = () => {
    return (
        <div className="flex justify-center">
            <div className="mt-32 flex flex-col align-center w-fit">
                <span className="text-lg md:text-2xl lg:text-3xl pl-20 lg:pl-4">Just For You</span>
                <div className="flex flex-wrap p-4 gap-12 justify-center">
                    {ProductsList.slice(0, 4)?.map((product, index) =>
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
            </div>
        </div>
    );
}

export default JustForYouSection;
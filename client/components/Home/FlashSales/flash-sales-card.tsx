import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";

interface ProductCardProps {
    percent: string;
    image: string;
    imageAlt: string;
    name: string;
    price: string;
    oldPrice: string;
    rating: string;
    vote: string;
  }


  const ProductCard: React.FC<ProductCardProps> = ({ percent, image, imageAlt, name, price, oldPrice, rating, vote }) => {
    return (
    <div className="hover:scale-105 transition-transform duration-300 ease-in-out w-72">
      <div className="rounded overflow-hidden shadow-lg my-2">
        <div className="flex group bg-gray-200 h-[220px] items-center p-4 relative">
          <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 text-xs">
            {percent}
          </div>
          <img
            className="mx-auto"
            src={image}
            alt={imageAlt}
          />
          <div className="absolute top-0 right-0 p-2 flex flex-col space-y-1">
            <button className="bg-white border-2 rounded-full p-1">
              <IoHeartOutline className="text-gray-500" />
            </button>
            <button className="bg-white border-2 rounded-full p-1">
              <IoEyeOutline className="text-gray-700" />
            </button>
          </div>
          <button className="w-full absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-blue-600 text-white px-4 py-2 rounded-sm bottom-4 left-1/2 transform -translate-x-1/2">
            ADD TO CART
          </button>
        </div>
        <div className="py-4 px-3">
          <div className="flex font-bold text-xl mb-2">{name}</div>
          <p className="flex text-gray-700 text-base ">
            <span className="text-blue-500 text-lg">${price}</span>
            <span className="text-gray-500 line-through text-md ml-2">${oldPrice}</span>
          </p>
          <div className="flex mt-2">
            <div className="text-yellow-500 text-lg">{rating}</div>
            <div className="text-center text-gray-600 text-sm ml-2">({vote})</div>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
export default ProductCard;

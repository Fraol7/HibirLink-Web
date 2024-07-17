import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "./flash-sales-card"
import { ProductsList } from "./products"


export function CarouselSpacing() {
  return (
    <Carousel className="flex flex-col mx-auto m-4 md:m-12 relative"> 
    <div className="absolute top-0 right-0 flex justify-between items-center z-10 mr-12">
        <CarouselPrevious className="bg-gray-200"/>
        <CarouselNext />
    </div>
    <CarouselContent className="ml-1 mt-8">
        {ProductsList.map((product: { percent: string; image: string; imageAlt: string; name: string; price: string; oldPrice: string; rating: string; vote: string }, index: React.Key | null | undefined) => (
        <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"> 
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
        </CarouselItem>
        ))}
        </CarouselContent>
    </Carousel>
)
}

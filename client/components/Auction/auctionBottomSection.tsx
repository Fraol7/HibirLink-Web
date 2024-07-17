import * as React from "react"
import AuctionListCard from "./AuctionListCard"
import { AuctionsList } from "./auctions"


const AuctionBottomSection = () => {
  return (
    <div className="mx-auto my-8 flex justify-evenly">
        {AuctionsList.slice(0,4).map((product: { starts: string; image: string; imageAlt: string; name: string; price: number }, index: React.Key | null | undefined) => (
            <AuctionListCard
                starts={product.starts}
                image={product.image}
                imageAlt={product.imageAlt}
                name={product.name}
                price={product.price}
                />
        ))}
    </div>
  )
}

export default AuctionBottomSection;
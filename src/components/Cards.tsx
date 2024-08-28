import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Loading from "./Loading";

interface Card {
  main?: boolean;
}
interface Image {
    public_id: string;
    url: string;
}
  
  interface ProductFromBack {
    createdAt: string;
    description: string;
    images: Image[];
    price: number;
    reservedBy: string | null;
    status: string;
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
  }

const Cards = (card: Card) => {
  const [products, setProducts] = useState<ProductFromBack[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/clothes")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data)
      })
      .catch((error) => console.log(error));
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    
  }, [products])

  if(isLoading) {
    return <Loading />
  }

  return (
    <div className="cards">
      <div className="cards_container">
        <ul className="cards_items mb-[25px]">
          {!card.main &&
            products.map((product, index) => (
              <CardItem
                path={product.title}
                src={product.images[0].url}
                label={product.title}
                title={product.title}
                price={product.price}
                key={index}
              />
            ))}
          {card.main &&
            products
              .slice(0, 4)
              .map((product, index) => (
                <CardItem
                path={product.title}
                src={product.images[0].url}
                label={product.title}
                title={product.title}
                price={product.price}
                key={index}
              />
              ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;

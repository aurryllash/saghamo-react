import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { ProductFromBack } from "./Interfaces/interface";
import { useProductStore } from "./Store";

interface Card {
  main?: boolean;
}  

const Cards = (card: Card) => {
  const [products, setProducts] = useState<ProductFromBack[]>([]);

  const productsStore = useProductStore(state => state.increment)

  useEffect(() => {
    fetch("/api/clothes")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data)
        productsStore(data)
      })
      .catch((error) => console.log(error));
  }, [productsStore]);



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

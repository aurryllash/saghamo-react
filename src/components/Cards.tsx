import React, { useEffect, useRef } from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { useProductStore } from "./Store";

interface Card {
  main?: boolean;
}

const Cards = (card: Card) => {
  const firstRender = useRef(true);
  const products = useProductStore((state) => state.products);
  const setProductsInStore = useProductStore((state) => state.setProducts);

  useEffect(() => {
    if(firstRender.current) {
      if(!products) {
        fetch("/api/clothes")
        .then((res) => res.json())
        .then((data) => {
            setProductsInStore(data);

            console.log('mounted!')
        })
        .catch((error) => console.log(error));
      }
      firstRender.current = false
    }  
  }, [products, setProductsInStore]);

  return (
    <div className="cards">
      <div className="cards_container">
        <ul className="cards_items mb-[25px]">
          {!card.main &&
            products?.map((product, index) => (
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
              ?.slice(0, 4)
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

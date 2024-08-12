import React, { useEffect, useState } from 'react'
import CardItem from './CardItem';
import './Cards.css'


interface Product {
    path: string;
    src: string;
    label?: string
    title:string,
    price: number,
    main?: boolean
}
interface Card {
    main?: boolean
}

const Cards = (card: Card) => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(error => console.log(error))
    }, [])

  return (
    <div className="cards">
        <div className="cards_container">
                <ul className="cards_items mb-[25px]">
                {!card.main && products.map((product, index) => (
                            <CardItem 
                            path={product.path}
                            src={product.src} 
                            label={product.label}
                            title={product.title}
                            price={product.price}
                            key={index}  />
                ))
                }
                {card.main && products.slice(0, 4).map((product, index) => (
                            <CardItem 
                            path={product.path}
                            src={product.src} 
                            label={product.label}
                            title={product.title}
                            price={product.price}
                            key={index}  />
                        ))
                }       
                </ul>
        </div>
    </div>
  )
}

export default Cards
import React, { useEffect, useState } from 'react'
import CardItem from './CardItem';
import './Cards.css'


interface Product {
    path: string;
    src: string;
    label?: string
    title:string,
    price: number
}

const Cards = () => {

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
        <div className="cards_container flex flex-col max-w-[1120px] w-[90%] mx-auto ">
            <div className="cards_wrapper relative my-[45px] mt-[-20px]">
                <ul className="cards_items mb-[25px]">
                {products.slice(0, 4).map((product, index) => (
                            <CardItem 
                            path={product.path}
                            src={product.src} 
                            label={product.label}
                            title={product.title}
                            price={product.price}
                            key={index}  />
                        ))}
                </ul>
            </div>
            <div className="cards_wrapper relative my-[45px] mt-[50px]">
                <ul className="cards_items mb-[25px]">
                {products.slice(4, 8).map((product, index) => (
                            <CardItem 
                            path={product.path}
                            src={product.src} 
                            label={product.label}
                            title={product.title}
                            price={product.price}
                            key={index}  />
                        ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
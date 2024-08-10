import React, { useEffect, useState } from 'react'


interface Product {
    path: string;
    src: string;
    label?: string
    title:string
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
        <div className="cards_container">
            <div className="cards_wrapper">
                <ul className="cards_items">
                {products.map((product, index) => (
                            <li key={index}>
                                <p>{product.title}</p>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
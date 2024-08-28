import React, { useEffect, useState } from 'react'
import Cards from '../Cards'
import Filter from '../Filter'
import { useProductStore } from '../Store'
import Loading from '../Loading'

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const products = useProductStore((state) => state.products)

  useEffect(() => {
      setIsLoading(false) 
  }, [products])

  if(isLoading) {
    return <Loading />
  }
  
  return (
    <section className='products_container p-[4rem]'>
      <Filter />
      <Cards  />
    </section>
  )
}

export default Products
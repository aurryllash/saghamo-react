import React, { useEffect } from 'react'
import Cards from '../Cards'

const Home = () => {
  useEffect(() => {
    console.log('mounted')
  }, [])
  return (
        <>
            <section className='home'>
            </section>
            <section className='h-[80vh]'>
                <Cards main={true} />
            </section>
        </>  
  )
}

export default Home
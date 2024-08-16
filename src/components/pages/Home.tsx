import React, { useEffect } from 'react'
import Cards from '../Cards'

const Home = () => {
  useEffect(() => {
    console.log('mounted')
  }, [])
  return (
        <div>
            <section className='home'>
              home
            </section>
            <section className='h-auto'>
                <Cards main={true} />
            </section>
        </div>  
  )
}

export default Home
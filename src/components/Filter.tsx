import React from 'react'

const Filter = () => {
  return (
    <section className="filter_container">
        <div className="filter_wrapper  max-w-screen-lg mx-auto grid grid-cols-1 gap-6 xl:grid-cols-2 p-4">
            <div className="filter_content flex items-center space-x-4">
                <p>Filter: </p>
                <a>Availabelity <i className='fa-solid fa-chevron-down  text-black text-[12px]'></i></a>
                <a>Price <i className='fa-solid fa-chevron-down  text-black text-[12px]'></i></a>
            </div>
            <div className="content flex items-center space-x-4">
                <p>Sort by: </p>
                <a>Date, old to new <i className='fa-solid fa-chevron-down  text-black text-[12px]'></i></a>
                <a>46 products <i className='fa-solid fa-chevron-down  text-black text-[12px]'></i></a>
            </div>
        </div>
    </section>
  )
}

export default Filter
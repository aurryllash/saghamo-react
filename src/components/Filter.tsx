import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const Filter = () => {
  return (
    <section className="filter_container">
        <div className="filter_wrapper max-w-screen-lg mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-2 xl:grid-cols-2">
            <div className="filter_content flex items-center space-x-4">
                <p>Filter: </p>
                <Menu as="div" className="relative">
                    <MenuButton className="flex items-center space-x-1">
                        Availabelity
                        <i className='fa-solid fa-chevron-down text-black text-[12px] ml-1'></i>
                    </MenuButton>
                    <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                        <MenuItem>
                                <a
                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer"
                                >
                                    In Stock
                                </a>
                        </MenuItem>
                        <MenuItem>
                                <a
                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer"
                                >
                                    Out Of Stock
                                </a>
                        </MenuItem>
                    </MenuItems>
                </Menu>
                <a className="flex items-center space-x-1">Price
                    <i className='fa-solid fa-chevron-down text-black text-[12px] ml-1'></i>
                </a>
            </div>

            <div className="content flex items-center space-x-4 lg:ml-[200px]">
                <p>Sort by: </p>
                <a className="flex items-center space-x-1">Date, old to new
                    <i className='fa-solid fa-chevron-down text-black text-[12px] ml-1'></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Filter
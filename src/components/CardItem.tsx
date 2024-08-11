import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

interface Props {
    path: string;
    src: string;
    label?: string
    title:string,
    price: number
}
const CardItem = (props : Props) => {
  return (
    <>
    <li className='cards_item flex flex-1 my-10 mx-[1rem] rounded-xl'>
        <Link className='cards_item_link' to={props.path}  data-category={props.label}>
            <figure className='cards_item_pic-wrap relative w-[100%] pt-[67%]' data-category={props.label}>
                <img src={ props.src } alt={ props.title } 
                className='cards_item_img'/>
            </figure>
            <div className="cards_item_info">
                <h5 className='cards_item_text'>{props.title}</h5>
                <h5 className='cards_item_text'>₾{props.price} GEL</h5>
            </div>
        </Link>
    </li>
    </>
  )
}

export default CardItem
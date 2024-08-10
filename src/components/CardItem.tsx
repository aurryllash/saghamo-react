import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    path: string;
    src: string;
    label?: string
    title:string
}
const CardItem = (props : Props) => {
  return (
    <>
    <li className='cards_item'>
        <Link className='cards_item_link' to={props.path}>
            <figure className='cards_item_pic-wrap' data-category={props.label}>
                <img src={ props.src } alt={ props.title } 
                className='cards_item_img'/>
            </figure>
            <div className="cards_item_info">
                <h5 className='cards_item_text'>{props.title}</h5>
            </div>
        </Link>
    </li>
    </>
  )
}

export default CardItem
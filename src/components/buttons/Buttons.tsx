import React from 'react'

interface Props {
    children: string,
    buttonStyle?: string,
    buttonSize?: string,
}

const btn__style = ['normal', 'outline']
const btn__size = ['medium', 'large']

const Buttons = (props: Props) => {
    const checkButtonStyle = props.buttonStyle && btn__style.includes(props.buttonStyle) ? props.buttonStyle : btn__style[0]
    const checkButtonSize = props.buttonSize && btn__style.includes(props.buttonSize) ? props.buttonSize : btn__size[0]
  return (
    <div className="button_container">
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} >{props.children}</button>
    </div>
  )
}

export default Buttons
import React from 'react'
import sprite from "../../../images/icons.svg";

const Logo = () => {
  return (
    <div>
        <a href="/" aria-label='Reload page'>
            <svg width={269} height={40}>
                <use xlinkHref={`${sprite}#icon-logo`}></use>
            </svg>
        </a>
    </div>
  )
}

export default Logo
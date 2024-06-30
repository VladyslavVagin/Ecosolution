import React from 'react';
import sprite from "../../../images/icons.svg";

const ContactInfo = () => {
  return (
    <div>
        <div>
            <p>Phone:</p>
            <div>
                <svg width={24} height={24}>
                    <use xlinkHref={`${sprite}#icon-call`}></use>
                </svg>
                <a href="tel:"></a>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default ContactInfo
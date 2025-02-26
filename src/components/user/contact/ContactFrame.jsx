import React from 'react'

const ContactFrame = ({mapSrc, width, height, iFrameClass}) => {
    return (
        <iframe
            className = {iFrameClass}
            src= {mapSrc}
            width={width}
            height={height}
            style={{border:0}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )
}

export default ContactFrame

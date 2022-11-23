import React from "react";

const Highlight = ({children, url=null, color="#FF7900", textColor="#FFFFFF"}) => (
  url !== null ? (<a 
    href={url}
    style={{
      color: textColor,
      cursor: 'pointer',
      textDecoration: 'none',
      margin: '0 5px'
    }}
    >
    <span
      style={{
        backgroundColor: color,
        borderRadius: '20px',
        padding: '5px 10px',
      }}
    >
        {children}
      
    </span>
  </a>
  ) : 
  (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '20px',
        padding: '5px 10px',
        color: textColor,
        cursor: 'pointer',
        margin: '0 5px'
      }}
    >
        {children}
      
    </span>
  )
);

export default Highlight;
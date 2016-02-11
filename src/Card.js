import React from 'react'

const styles = {
  display: 'inline-block',
  width: 400,
  padding: '20px 40px',
  boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.12), 0px 2px 2px 0px rgba(0,0,0,0.24)',
  background: '#fff',
  margin: '20px',
  position: 'relative'
}

const Card = ({children, style, ...rest}) => 
  <div style={{...styles, ...style}} {...rest}>{children}</div>

export default Card

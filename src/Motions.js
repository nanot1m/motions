import React from 'react'
import Card from './Card'
import {StaggeredMotion, spring, presets} from 'react-motion'


export default ({direction}) => {
  let left
  if (direction > 0) {
    left = -100
  } else {
    left = 100
  }

  return <div style={{width: 1040}}>
    <h1 style={{textAlign: 'center'}}>Motions</h1>
    <StaggeredMotion
      defaultStyles={[{left}, {left}, {left}, {left}]}
      styles={(prevInterpolatedStyles) => prevInterpolatedStyles.map((_, i) => {
        return i === 0
          ? {left: spring(0, presets.stiff)}
          : {left: spring(prevInterpolatedStyles[i - 1].left, presets.stiff)}
      })}
    >
      {(styles) => (
        <div>
        { styles.map((style, i) =>
          <Card key={i} style={{left: style.left + '%'}}>
            <h2>Motions are the epicenter of beauty</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto voluptate, iste asperiores quos soluta consequatur maiores, aspernatur fugit voluptatem perspiciatis, nostrum obcaecati. Temporibus ut, tempora consequuntur neque excepturi, atque recusandae.</p>
            <h2>Another mention</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis incidunt magni fugiat officiis, doloribus atque sint, enim a animi ipsa totam sapiente tenetur, est quaerat culpa quisquam ipsum voluptas quia.</p>
          </Card>
        )} 
        </div>
      )}
    </StaggeredMotion>
  </div>
}
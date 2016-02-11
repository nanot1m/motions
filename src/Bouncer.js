import React from 'react'
import Card from './Card'


class Bouncer extends React.Component {
  state = {
    i: 0
  };

  componentDidMount() {
    this.i = 0
    this.interval = setInterval(() => this.setState({i: this.i++}), 1000/120)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return <Card>
    {Array(10).fill(0).map((_, i) =>
      <div 
        key={i} 
        style={{
          padding: Math.sin(this.state.i/20) * 10 + 10, 
          border: '1px solid #dedfdf', 
          marginTop: -1, 
          textAlign: 'center',
          background: `#ff${i}f${i}f`,
          color: `#${9-i}f${i}f${i}f`
        }}
      >
        Sin(x)
      </div>
      )
    }
    </Card>
  }
}

export default Bouncer

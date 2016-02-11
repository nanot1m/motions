import React, { Component } from 'react'
import {TransitionMotion, spring, presets} from 'react-motion'
import {Link, IndexLink} from 'react-router'

const randColor = function () {
  const hex = Math.floor(Math.random() * 0xFFFFFF)
  return '#' + hex.toString(16)
}

const styles = {
  link: {
    color: '#407CCB',
    textDecoration: 'none',
    padding: '4px 8px'
  },
  pages: {
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden'
  },
  nav: {
    textAlign: 'center'
  }
}

export default class App extends Component {

  state = {
    transitionDirection: 1
  };

  componentWillReceiveProps({location: {state}}) {
    const numState = state || 0
    const _state = this.props.location.state
    if (numState > _state) {
      this.setState({transitionDirection: -1})
    } else {
      this.setState({transitionDirection: 1})
    }
  }

  willEnter = () => {
    const toLeft = this.state.transitionDirection < 0
    return {
      left: toLeft ? 100 : 0,
      opacity: 0,
      scale: 0.95
    }
  };

  willLeave = () => {
    const toLeft = this.state.transitionDirection < 0
    return {
      left: toLeft ? spring(0, presets.stiff) : spring(100, presets.stiff),
      opacity: spring(0),
      scale: spring(0.95)
    }
  };
  
  getStyles = () => {
    const { children, location } = this.props
    const { pathname, state } = location 
    return [{
      data: {
        handler: React.cloneElement(children, {direction: this.state.transitionDirection}),
        state
      },
      style: {
        left: spring(50, presets.stiff),
        opacity: spring(1),
        scale: spring(1)
      },
      key: pathname
    }]
  };

  render() {
    return (
      <div>
        <nav style={styles.nav}>
          <Link to={{pathname: '/about', state: 0}} style={styles.link}>About</Link>
          <IndexLink to={{pathname: '/', state: 1}} style={styles.link}>Index</IndexLink>
          <Link to={{pathname: '/contacts', state: 2}} style={styles.link}>Contacts</Link>
          <Link to={{pathname: '/bouncer', state: 3}} style={styles.link}>Bouncer</Link>
        </nav>
        <TransitionMotion
          styles={this.getStyles()}
          willEnter={this.willEnter}
          willLeave={this.willLeave}
        >
          {styles =>
            <div>
              {styles.map(({key, style, data}) =>
                <div
                  key={key}
                  style={{
                    left: `${style.left}%`,
                    position: 'absolute',
                    opacity: style.opacity,
                    transform: `scale(${style.scale}) translateX(-50%)`
                  }}
                >
                 {data.handler}
                </div>
              )}
            </div>
          }
        </TransitionMotion>
      </div>
    );
  }
}

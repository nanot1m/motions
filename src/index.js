import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router'
import App from './App'
import About from './About'
import Contacts from './Contacts'
import Motions from './Motions'
import Bouncer from './Bouncer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Motions} />
      <Route path='about' component={About}/>
      <Route path='contacts' component={Contacts}/>
      <Route path='bouncer' component={Bouncer}/>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'));

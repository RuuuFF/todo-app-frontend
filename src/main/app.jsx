import React from 'react'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import Menu from '../template/menu'
import Todo from '../todo/todo'
import About from '../about/about'

const App = props => (
  <div className="container">
    <Menu />
    <Todo />
    <About />
  </div>
)

export default App
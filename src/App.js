import React, { Component } from 'react'
import Counter from './components/Counter'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./App.css"
import Form from './components/Form';


class App extends Component  {
  render() {
    return (
      <div className="app">
        <h1 className='head'>React Test</h1>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/counter" element= {<Counter/>}    />
            <Route path="/form" element= {<Form/>}    />
          </Routes>
        </Router>
    </div>
    )
  }
}

export default App
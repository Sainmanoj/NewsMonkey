import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route exact  path="/" element={<News key="general" pageSize={10} category="general"/>}></Route>
      <Route exact path="/entertainment" element={<News key="entertainment"  pageSize={10} category="entertainment"/>}></Route>
      <Route exact path="/business" element={<News  key="business" pageSize={10} category="business"/>}></Route>
      <Route exact path="/health" element={<News key="health" pageSize={10} category="health"/>}></Route>
      <Route exact  path="/science" element={<News key="science" pageSize={10} category="science"/>}></Route>
      <Route exact  path="/sports" element={<News key="sports" pageSize={10} category="sports"/>}></Route>
      <Route exact  path="/technology" element={<News key="technology" pageSize={10} category="technology"/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}

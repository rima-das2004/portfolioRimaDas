import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects.jsx'
import Experiences from './Experiences.jsx'
import Layout from './Layout'
import NoPage from './NoPage.jsx'

function App() {
 return (
 
<div className="all" style={{
 background: 'linear-gradient(276deg, rgb(0 74 106) 0%, rgb(0 12 32) 50%, rgb(12, 1, 48) 100%)'}}>
 <Routes>
 <Route path="/" element={<Layout />}>
 <Route index element={<Home />} />
<Route path="project" element={<Projects />} />
 <Route path="contact" element={<Contact />} />
 <Route path="experiences" element={<Experiences />} />
<Route path="*" element={<NoPage />} />
 </Route>
 </Routes>
</div>
 )
}


export default App;

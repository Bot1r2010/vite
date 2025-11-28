import React from 'react'
import Navbar from './components/navbar.jsx/Navbar'
import Why from './components/UI/why/Why'
import Courses from './components/UI/courses/Courses'
import How from './components/UI/how/How'
import Our from './components/UI/our/Our'
import Your from './components/UI/your/Your'
import Meet from './components/UI/meet/Meet'
import Poste from './components/UI/poste/Poste'
import To from './components/UI/to/To'
import Footer from './components/footer.jsx/Footer'

const App = () => {
  return (
    <div>

    <Navbar />
    <Why /> 
    <Courses /> 
    <How />
    <Our />
    <Your />
    <Meet />
    <Poste />
    <To />
    {/* <Footer /> */}
      
      
    </div>
  )
}

export default App
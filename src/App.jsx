
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/home/Home'
import Features from './components/features/Features'
import Aboutme from './components/about/Aboutme'
import ScrollAnimation from './components/SrcollAnimation'
import Portfolio from './components/projects/Projects'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'
import LeetCodeStats from './components/leetcode/Card'

function App() {

  return (

      <div className='bg-[#02061e]'>
    <NavBar />
    <Home />
    <Aboutme />
    <Features />
    {/* <ScrollAnimation /> */}
    {/* <Education /> */}
    <LeetCodeStats />
    <Portfolio /> 
    {/* <Contact /> */}
    <br /><br /><br />
    </div>
  )
}

export default App

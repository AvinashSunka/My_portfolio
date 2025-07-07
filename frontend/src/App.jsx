import './App.css'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NavBar from './components/Navbar/NavBar'
import Home from './components/home/Home'
import Features from './components/features/Features'
import SkillsSection from './components/Skills/Skills'
import Education from './components/education/Education'
import Projects from './components/projects/Projects'
import Card from './components/leetcode/Card'
import FreelanceAvailability from './components/Skills/FreelanceAvailability'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const queryClient = new QueryClient();

function App() {
  const [resumeUrl, setResumeUrl] = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen  bg-white text-black dark:bg-[#0e0e0e] dark:text-white transition-colors duration-500  bg-gradient-to-r from-[#ffd6a5] via-[#fff8f0] to-[#d0f0ff] dark:from-[#0f0f0f] dark:via-[#1a1a1a] dark:to-[#111827]">
        <NavBar resumeUrl={resumeUrl} />  
        <div className='w-full flex justify-center '>
        <div className='w-full md:w-3/4 p-9'>
        <Home setResumeUrl={setResumeUrl} />
        <Features />
        <SkillsSection />
        <Education />
        <Card />
        <Projects />
        <FreelanceAvailability />
        <Contact />
        </div></div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;

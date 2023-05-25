import './App.css'
import Devinfo from './components/Devinfo'
import Navbar from './components/Navbar'
import Search from './components/Search'
import TypingAnimation from './components/Typing'

function App() {

  return (
    <div className='w-full h-auto md:h-screen bg-bigLight dark:bg-bigDark'>
      <Navbar />
      <Search />
      <Devinfo/>
      <div className="text-center mt-10 md:mt-12 text-black dark:text-white font-bold">
        <TypingAnimation />
      </div>
    </div>
  )
}

export default App

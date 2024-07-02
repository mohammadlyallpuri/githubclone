
import{Route ,Routes} from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignUpPage'
import ExplorePage from './pages/ExplorePage'
import LikesPage from './pages/LikesPage'
import Sidebar from './components/Sidebar'; // Adjust the path as necessary


function App() {
 
  return (
   <div className="flex ">
    <Sidebar/>
    <div className='max-w-5xl my-5 text-white '>
      <Routes>
        <Route path='/' element={<HomePage  />}/>
        <Route path='/login' element={<LoginPage  />}/>
        <Route path='/signup' element={<SignupPage  />}/>
        <Route path='/explore' element={<ExplorePage  />}/>
        <Route path='/likes' element={<LikesPage  />}/>
      </Routes>
      
    </div>

   </div>
  )
}

export default App

import './App.css'
import About from './component/about'
import AddToDo from './component/addTodo'
import Company from './component/company'
import Contact from './component/contact'
import Home from './component/Home'
import Team from './component/team'
import Todos from './component/todos'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
function App() {

  return (
    <>
       {/* <h1>Redux Tookit</h1>
       <AddToDo/>
       <Todos/> */}
       <BrowserRouter>
        <nav>
          <ul style={{display:'flex', justifyContent:'space-between', marginBottom:'10px', backgroundColor:'yellow', padding:'5px'}}>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' Component={Home}/>
          {/* Nested path */}
          <Route path='/about' element={<About/>}>
            <Route path='team' element={<Team/>}/>
            <Route path='company' element={<Company/>}/>
          </Route>
          <Route path='/contact' Component={Contact}/>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App

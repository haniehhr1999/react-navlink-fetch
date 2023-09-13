import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {
  const colorYellow = ({isActive})=>({
    color: isActive ? 'yellow' : '#EF9595'
  })

  return (
    <main>
      <div className="container-fluid">
        <div className="row"> 
          <div className="col-3 left">
              <ul className='list-unstyled'>
                <li>
                  <NavLink style={colorYellow} to='/home'>Home</NavLink>
                </li>
                <li>
                  <NavLink style={colorYellow} to='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink style={colorYellow} to='/users'>Users</NavLink>
                </li>
              </ul>
          </div>
          <div className="col-9 right">
              <Outlet/>
          </div>
        </div>
      </div>
    </main>
  )
}
export default App
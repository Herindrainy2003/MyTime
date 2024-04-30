import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='nav'>
        <ul>
            <li> <Link to="/">Acceuil</Link> </li>
            <li> <Link to="/todo">Mes Taches</Link> </li>
            <li> <Link to="/pomodoro">Apprendre</Link> </li>
            <li> <Link to="/repos">Repos</Link> </li>
        </ul>
    </div>
    
  )
}

export default Header

import React from 'react'
import {Link}from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Sidebar = () => {
  return (
    <>
        <div className='sidebar'>
            <ul> 
                <text className='option-text '>Opciones de sistema</text>
                <li>  
                    <Link to={"/#"} className='btn btn-secundary' ><FaIcons.FaHome/> Inicio </Link>
                </li> 
            </ul>
        </div>
    </>
  )
}

export default Sidebar;
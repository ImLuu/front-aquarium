import React from 'react'
import SearchBar from '../SearchBar/SearchBar';



const Header = () => {
  return (
    <>
        <div className='cabezal'> 
          <div className='interior' ><text className='texto-internior'>C19 Arduino Control</text></div> 
          <SearchBar/>
         
        </div>
        
    </>
  )
}
export default Header;
import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import Plot from 'react-plotly.js';


var datav = [{
  type: 'indicator',
  mode: "gauge+number",
  title: { text: "Indicador de PH" },
  value: 4, 
  domain: { row: 0, column: 1 },
  delta: { reference: 400 },
  gauge: { axis:{range: [0.0 , 14.0] } }}];


const Header = () => {
  return (
    <>
        <div className='cabezal'> 
          <div className='interior' ><text className='texto-internior'>C19 Arduino Control</text></div> 
          <SearchBar/>
          <div className='contenedor-plot'>
            <Plot style={{width:'50vh',height:'45vh',position:'relative',margin:'0 ',top:'20px',left:'360px',display:'grid'}} data={datav}/> 
          </div>
        </div>
        
    </>
  )
}
export default Header;
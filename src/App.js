import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import './App.css';
import Header from './Components/Head/Header';
import Sidebar from './Components/SideBar/Sidebar';
import { BrowserRouter as Router , Route } from 'react-router-dom';

function App() {
  const [chartData, setChartData] = useState([])
  const [latestTs, setLatestTs] = useState()
  const [latestReading, setLatestReading] = useState()

  async function getData() {
    let datestring, numberReading
    let tempArr = []
    const url = `http://localhost:3000/readings?limit=100`
    const response =  await fetch(url)
    const data =  await response.json()
    data.forEach((entry, index) => {
      datestring  = (new Date((new Date(entry['ts'])).getTime() + 8 * 60 * 60 * 1000)).toISOString() //converting to SG local time, toLocaleString messes up with Plotly formatting strings
      numberReading = parseFloat(entry['value']['$numberDecimal'])
      tempArr.push({x: datestring, y:numberReading})
    })
    
    setLatestTs(tempArr[0]['x'])
    setLatestReading(tempArr[0]['y'])
    setChartData(tempArr)
  }

  useEffect(() => {
    const intervalID = setInterval(() => getData(), 1000) //refresh page every 1 seconds for new data
    return () =>{
      clearInterval(intervalID)}
  })
  


  return (
    <>
      <Router>
      {/*Para el value necesitamos que obtenga la data */}
        <Header/>
        <Sidebar/>
        

        </Router>
    </>
  )

}
export default App;
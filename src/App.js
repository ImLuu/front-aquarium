import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import Header from "./../src/Components/Head/Header.jsx";
import "./App.css";
import SimpleTable from "./Components/Tabla/SimpleTable.jsx";
import TablaDatos from "./Components/Tabla/TablaDatos.js";
import TablaAlimentacion from "./Components/Tabla/TablaAlimentacion.js";
import "./Components/Tabla/TablaDatos.css";
import Tabla3 from "./Components/Tabla/Tabla3.js"
import Tabla4 from "./Components/Tabla/Tabla4.js"

function App() {
  const [chartData, setChartData] = useState([]);
  const [latestTs, setLatestTs] = useState();
  const [latestReading, setLatestReading] = useState();

  async function getData() {
    let datestring, numberReading;
    let tempArr = [];
    const url = `http://localhost:3000/readings?limit=100`;
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((entry, index) => {
      datestring = new Date(
        new Date(entry["ts"]).getTime() + 8 * 60 * 60 * 1000
      ).toISOString(); //converting to SG local time, toLocaleString messes up with Plotly formatting strings
      numberReading = parseFloat(entry["value"]["$numberDecimal"]);
      tempArr.push({ x: datestring, y: numberReading });
    });

    setLatestTs(tempArr[0]["x"]);
    setLatestReading(tempArr[0]["y"]);
    setChartData(tempArr);
  }

  useEffect(() => {
    const intervalID = setInterval(() => getData(), 1000); //refresh page every 1 seconds for new data
    return () => {
      clearInterval(intervalID);
    };
  });

  //Vamos a obtener la info de la base e imprimir
  const info = {
    
  }

  var dataPh = [
    {
      type: "indicator",
      mode: "gauge+number",
      title: { text: "Indicador de PH" },
      value: 4,
      domain: { row: 0, column: 1 },
      delta: { reference: 400 },
      gauge: { axis: { range: [0.0, 14.0] } },
    },
  ];
  var dataT = [
    {
      type: "indicator",
      mode: "gauge+number",
      title: { text: "Indicador de Temp °C" },
      value: 4,
      domain: { row: 0, column: 1 },
      delta: { reference: 400 },
      gauge: { axis: { range: [-273.0, 273.0] } },
    },
  ];

  return (
    <>
      <Header />
      <div className="container">
        <div className="table">
          <div className="row">
            <div className="col-sm-4 mt-4">
              <div className="table">
                <div className="header" style={{ marginTop: "30px" }}>
                  Tabla de Datos{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", height: "50vh" }}>
        <diV style={{ flex: 1, width: "50%", margin: "15px" }}>
          <Tabla4></Tabla4>
        </diV>

        <div className="plt" style={{ flex: 1, width: "50%" }}>
          <Plot
            style={{
              width: "50vh",
              height: "45vh",
              position: "relative",
              margin: "0 ",
              top: "20px",
              left: "25%",
              display: "grid",
            }}
            data={dataT}
          />
        </div>
      </div>

      <div style={{ display: "flex", height: "50vh" }}>
        <div style={{ flex: 1, width: "70%", margin: "15px" }}>
          <Tabla3></Tabla3>
        </div>

        <div className="plot" style={{ flex: 1, width: "50%" }}>
          <Plot
            style={{
              width: "50vh",
              height: "45vh",
              position: "relative",
              margin: "0 ",
              top: "0px",
              left: "15px",
              display: "grid",
            }}
            data={dataPh}
          />
        </div>
      </div>
     
    </>
  );
}
export default App;

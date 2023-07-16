import React, { useState, useEffect } from 'react';

const Tabla2 = () => {
  //tiempo
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 10000); // Actualiza cada 10 segundo

    return () => {
      clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);
  /////////////////

  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error al recuperar el JSON:', error);
      }
    };

    const fetchDataInterval = setInterval(fetchData, 10000); // Cada 10 segundos

    return () => {
      clearInterval(); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);
  ///////////////////////////////////////////////////////
    






  ////////////////////////////////////////////////////

  return (
    <div>
      <h1>Hora actual:</h1>
      <p>{currentTime}</p>
      
      <table>
      <thead>
        <tr>
          <th>Hora</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
      { jsonData.map((datos)=>(
      <tr key={datos.id}>
      <td className='text-center'>{datos.id}</td>
      <td>{datos.username}</td>
      </tr> ))}
      </tbody>
    </table>

    </div>
  );
};

export default Tabla2;

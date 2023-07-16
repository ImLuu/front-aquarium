import React, { useState, useEffect } from 'react';

const Tabla3 = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        setData(jsonData);
        setCurrentIndex(0); // Reiniciar el índice cuando se lee un nuevo JSON
      } catch (error) {
        console.error('Error al recuperar el JSON:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < data.length - 1) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      });
    }, 1000); // Cada 1 segundos

    return () => {
      clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    };
  }, [data]);

  useEffect(() => {
   

    if (data.length > 0) {
      setRecords((prevRecords) => {
        const currentTime = new Date().toLocaleTimeString();
        const newRecord = {
          timestamp: currentTime,
          id: data[currentIndex]?.id,
          name: data[currentIndex]?.name
        };
        const updatedRecords = [...prevRecords];

        if (updatedRecords.length < 7) {
          updatedRecords.push(newRecord);
        } else {
          updatedRecords.shift();
          updatedRecords.push(newRecord);
        }
        return updatedRecords;
      });
    }
  }, [currentIndex, data]);

  return (
    <div>
      <h1>Tabla de registros</h1>
      <table className="tabla-datos">
        <thead>
          <tr>
            <th>Marca de tiempo</th>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.timestamp}</td>
              <td>{record.id}</td>
              <td>{record.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla3;

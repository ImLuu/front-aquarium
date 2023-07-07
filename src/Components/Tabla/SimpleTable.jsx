import React from 'react';
import './SimpleTable.css';

const SimpleTable = () => {
  // Ejemplo de datos
  const data = [
    { phLevel: 1,
    tempLevel: 'Juan'},
  ];

  return (
    <table className="simple-table">
      <thead>
        <tr>
          <th>Nivel de PH</th>
          <th>Temperatura °C</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.phLevel}>
            <td>{item.phLevel}</td>
            <td>{item.tempLevel}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;

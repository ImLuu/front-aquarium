import React from 'react';


const TablaDatos = () => {
  return (
    <table className="tabla-datos">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Hora</th>
          <th>pH</th>
          <th>Temperatura</th>
          <th>Caudal</th>
        </tr>
      </thead>
      <tbody>
        {/* Aquí puedes agregar filas con datos */}
        <tr>
          <td>2023-06-19</td>
          <td>7.2</td>
          <td>10.5</td>
          <td>25°C</td>
          <td>09:00</td>
        </tr>
        <tr>
          <td>2023-06-20</td>
          <td>7.5</td>
          <td>11.2</td>
          <td>26°C</td>
          <td>10:00</td>

        </tr>
        <tr>
          <td>2023-06-19</td>
          <td>7.2</td>
          <td>10.5</td>
          <td>25°C</td>
          <td>09:00</td>
          
        </tr>
        <tr>
          <td>2023-06-19</td>
          <td>7.2</td>
          <td>10.5</td>
          <td>25°C</td>
          <td>09:00</td>
        
        </tr>
        <tr>
          <td>2023-06-19</td>
          <td>7.2</td>
          <td>10.5</td>
          <td>25°C</td>
          <td>09:00</td>
        
        </tr>
      </tbody>
    </table>

    
  );
};



export default TablaDatos;
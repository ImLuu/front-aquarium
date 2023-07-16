import React from 'react';
import { useState,useEffect } from 'react';


const TablaAlimentacion = () => {

  //setear los hooks 
  const [Data ,setData] = useState([])
  //funcion para traer los datos de la api
  const URL ='https://jsonplaceholder.typicode.com/users'

  const showData = async() =>{
     const response = await fetch(URL)
     const data1 =await response.json()
     //console.log(data)
     setData(data1)
    
  }
  //console.log('hola mundo')

  useEffect(()=>{
    const intervalId = setInterval(() => {
      showData();
    }, 30000); // 3 minutos en milisegundos

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  


  //limita el tamano de la tabla
  let results =[]
     if(Data.length>7)
     {
        results=Data.slice(0,7) 
     }else{
        results=Data
     }



  //cambiar id y username por los valores correspondientes

  return (
    <table className="tabla-datos" >
      <thead>
        <tr>
          <th>Hora</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
      { results.map((datos)=>(
      <tr key={datos.id}>
      <td className='text-center'>{datos.id}</td>
      <td>{datos.username}</td>
      </tr> ))}
      </tbody>
    </table>

    
  );
};



export default TablaAlimentacion;
import React, {useState} from 'react'


const SearchBar=() => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = () => {
      // Realizar la acción deseada con el término de búsqueda
      // (por ejemplo, llamar a una API o realizar una búsqueda local)
  
      console.log('Realizando búsqueda con el término:', searchTerm);
  
      // Aquí puedes agregar tu lógica personalizada para manejar la búsqueda
    };
  
    return (
      <div className="search-bar" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-20px'}}>
        <input 
          type="text"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          placeholder="Ingrese su búsqueda"
        />
        <button onClick={handleSearch}> Buscar </button>
      </div>
    );
  }
  
  export default SearchBar;
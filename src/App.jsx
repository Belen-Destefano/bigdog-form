import { useState } from 'react';
import './App.css';

function App() {
  const [dogName, setDogName] = useState('');
  const [checkboxValues, setCheckboxValues] = useState([
    { name: "Cazador", checked: false },
    { name: "Amigable", checked: false },
    { name: "Developer", checked: false },
    { name: "Sabueso", checked: false },
    { name: "Guardian", checked: false }
  ]);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('');

   const handleInputChange = (e) => {
    setDogName(e.target.value);
    console.log(`Nombre: ${dogName}`);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues(prevState =>
      prevState.map(checkbox =>
        checkbox.name === name ? { ...checkbox, checked: checked } : checkbox
      )
    );
    console.log(`Mi perro es un ${name}`);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(`Raza: ${e.target.value}`)
  };

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
    console.log(`Tamaño: ${e.target.value}`)
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form>
       {/* Nombre */}
        <div>
          <label htmlFor="nombre">Nombre del Perro</label>
          <input type="text" id="nombre" name="nombre" onChange={handleInputChange} required/>
        </div>

        <br />
       {/* Personalidad */}
        <div>
          <label>
            Habilidades Caninas
            {checkboxValues.map((checkbox, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  name={checkbox.name}
                  checked={checkbox.checked}
                  onChange={handleCheckboxChange}
                />
            {checkbox.name}
              </div>
            ))}
          </label>
        </div>
        
        <br />
       {/* Raza  */}
        <div>
          <label>
            Raza 
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="">Selecciona una opción</option>
              <option value="Pura">Raza Pura</option>
              <option value="Mezcla">Mezcla de Raza</option>
              <option value="Developer">Mezcla de JS y React</option>
              <option value="Mestizo">Mestizo</option>
            </select>
          </label>
        </div>

        <br />
        {/* Tamaño */}
        <div>
          <label>Tamaño</label>
          <div>
            <label>
              <input
                type="radio"
                value="Big"
                checked={selectedRadio === 'radio1'}
                onChange={handleRadioChange}
              />
            Big Dog
            </label>
          </div>
   
          <div>
            <label>
              <input
                type="radio"
                value="Little"
                checked={selectedRadio === 'radio2'}
                onChange={handleRadioChange}
              />
            Little Dog
            </label>
          </div> 
        </div> 
      </form>
    </div>
  );
}



export default App

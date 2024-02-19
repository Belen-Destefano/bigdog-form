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
    // console.log(`Nombre: ${dogName}`);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues(prevState =>
      prevState.map(checkbox =>
        checkbox.name === name ? { ...checkbox, checked: checked } : checkbox
      )
    );
    // console.log(`Mi perro es un ${name}`);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    // console.log(`Raza: ${e.target.value}`)
  };

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
    // console.log(`Tamaño: ${e.target.value}`)
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado!')

    // Imprimir el resultado de todos los inputs
    console.log('Nombre del Perro:', dogName);

    const selectedCheckboxValues = checkboxValues.filter(checkbox => checkbox.checked);
    console.log('Habilidades Caninas:', selectedCheckboxValues.map(checkbox => checkbox.name).join(', '));     
    const isDeveloper= selectedCheckboxValues.some(checkbox => checkbox.name === 'Developer')
    console.log (`Es desarrollador: ${isDeveloper}`)

    console.log('Raza:', selectedOption);
    
    console.log('Tamaño:', selectedRadio);

    const secretResponse = isDeveloper & selectedRadio === 'Big' ? '¡Contraseña secreta ingresada con éxito! Un agente secreto de Big Dog está en camino para comunicarse con usted. Por razones de seguridad, le pedimos que cierre esta página web y espere instrucciones. ¡Gracias por confiar en Big Dog para resolver su Web!' : 'Formulario enviado! Comenzaremos a ayudarlo con la busqueda de un perro con las descripciones establecidas. Esperamos encontrarle el mejor amigo fiel que pueda imaginar y supere sus expectativas'

    alert(secretResponse)


  }

  return (
    <div style={{backdropFilter: 'blur(28px)', padding: '2%',  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%'}}>
      <h1>Formulario de Adopcion Canina</h1>
      <h2>Como quisieras que sea tu amigo perruno ideal </h2>
      <div style={   { display: 'flex', flexDirection: 'row'} }>

        <form onSubmit={handleFormSubmit} style={{width: '40%'}}>
        {/* Nombre */}
          <div>
            <label htmlFor="nombre">Nombre del Perro</label><br />
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
              <br />
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
                  checked={selectedRadio === 'Big'}
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
                  checked={selectedRadio === 'Little'}
                  onChange={handleRadioChange}
                />
              Little Dog
              </label>
            </div> 
          </div> 
          
          <br />
          {/* Boton Submit */}
        <button type="submit">Enviar</button>
        </form>

        <div style={{ width: '100%', backgroundImage: 'url("/backgroundDog.png")', backgroundSize: 'cover' }}>
         {/* blabla */}
      </div>


      </div>
    </div>
  );
}



export default App

import { useState } from 'react';
import './App.css';
import Form from './components/form';
import SecretComponent from './components/secretComponent';

function App() {

  const [showSpinner, setShowSpinner] = useState (false)
  const[showSecretComponent ,setShowSecretComponent] = useState(false)
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
    // console.log('Formulario enviado!')
    // Imprimir el resultado de todos los inputs
    // console.log('Nombre del Perro:', dogName);

    const selectedCheckboxValues = checkboxValues.filter(checkbox => checkbox.checked);
    // console.log('Habilidades Caninas:', selectedCheckboxValues.map(checkbox => checkbox.name).join(', '));     
    const isDeveloper= selectedCheckboxValues.some(checkbox => checkbox.name === 'Developer')
    // console.log (`Es desarrollador: ${isDeveloper}`)
    // console.log('Raza:', selectedOption);    
    // console.log('Tamaño:', selectedRadio);

    if (isDeveloper & selectedRadio === 'Big'& selectedOption === 'Developer'){
      setShowSpinner(true)

      setTimeout(()=>{
        setShowSpinner(false);
        setShowSecretComponent(true)
      },2000 )
    }

    // const secretResponse = isDeveloper & selectedRadio === 'Big' ? '¡Contraseña secreta ingresada con éxito! Un agente secreto de Big Dog está en camino para comunicarse con usted. Por razones de seguridad, le pedimos que cierre esta página web y espere instrucciones. ¡Gracias por confiar en Big Dog para resolver su Web!' : 'Formulario enviado! Comenzaremos a ayudarlo con la busqueda de un perro con las descripciones establecidas. Esperamos encontrarle el mejor amigo fiel que pueda imaginar y supere sus expectativas'

    // alert(secretResponse)


  }



  return (
    <>     
      {showSpinner ? <div style={{height:'100vh', overflow: 'hidden'}}><img style={{width: '100%'}} src="https://i.pinimg.com/originals/c5/9a/d2/c59ad2bd4ad2fbacd04017debc679ddb.gif" alt="Loading..." /></div>: showSecretComponent? <SecretComponent/>:  <Form
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        handleSelectChange={handleSelectChange}
        handleRadioChange={handleRadioChange}
        handleFormSubmit={handleFormSubmit}
        checkboxValues={checkboxValues}
        selectedOption={selectedOption}
        selectedRadio={selectedRadio}
      />}
    </>
  );
}



export default App

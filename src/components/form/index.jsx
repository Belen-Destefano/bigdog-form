// import React from 'react'

function Form({handleFormSubmit, handleInputChange, checkboxValues, handleCheckboxChange, handleSelectChange, selectedOption, selectedRadio, handleRadioChange}) {
  return (
    <div style={{backdropFilter: 'blur(28px)', padding: '2%',  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%'}}>
     
    <h1>Formulario de Adopcion Canina</h1>
    <h2>Como quisieras que sea tu amigo perruno ideal </h2>
    <div style={   { display: 'flex', flexDirection: 'row'} }>

      <form onSubmit={handleFormSubmit} style={{width: '40%'}}>
      {/* Nombre */}
        <div>
          <label htmlFor="email">Correo electrónico</label><br />
          <input type="email" id="nombre" name="nombre" onChange={handleInputChange} required/>
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
  )
}

export default Form
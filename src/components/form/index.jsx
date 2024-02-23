const skillsCans = ["Cazador", "Amigable", "Developer", "Sabueso", "Guardian"];

function Form({ onSubmit}) {
 
  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e); 
    document.getElementById("dogForm").reset(); 
  };

  return (
    <div className="containerForm" style={{backdropFilter: 'blur(28px)', padding: '2%', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 10px', width: '100%', marginTop: '3%'}}>
      <h1>Formulario de Adopcion</h1>
      <h2>Contanos como quisieras que sea tu amigo perruno ideal </h2>
      <div className="form" style={ {display: 'flex',  flexDirection: 'row'}}>
        <form id="dogForm" onSubmit={onHandleSubmit} >
          {/* Nombre */}
          <div>
            <label htmlFor="email">
              Correo electrónico
              <br />
              <input type="email" id="email" name="email" required />
            </label>
          </div>

          <br />
          {/* Personalidad */}
          <div>
            <label>Habilidades Caninas</label>
            {skillsCans.map((skill, index) => (
              <div key={index}>
                <input type="checkbox" name={skill} />
                {skill}
              </div>
            ))}
          </div>

          <br />
          {/* Raza  */}
          <div>
            <label>
              Raza
              <br />
              <select id="select" name="raza">
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
            <label>
              Tamaño
              <div>
                <label>
                  <input type="radio" name="tamaño" value="Big" />
                  Big Dog
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="tamaño" value="Little" />
                  Little Dog
                </label>
              </div>
            </label>
          </div>

          <br />
          {/* Boton Submit */}
          <button className="submitButtom" type="submit">
            Enviar
          </button>
        </form>

        <div style={{ width: "100%", backgroundImage: 'url("/backgroundDog.png")', backgroundSize: "cover" }}>
          {/* blabla */}
        </div>
      </div>
    </div>
  );
}

export default Form;

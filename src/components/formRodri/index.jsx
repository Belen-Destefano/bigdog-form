import { useState } from "react";

const skillsCans = [
  { name: "Cazador" },
  { name: "Amigable" },
  { name: "Developer" },
  { name: "Sabueso" },
  { name: "Guardian" },
];

function Form({ onSubmit }) {
  const [mascota, setMascota] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSubmit(mascota)
  }

  const handleOnChange = (event) => {
    setMascota({ ...mascota, [event.target.name]: event.target.value || event.target.checked });
  };

  return (
    <div
      className="containerForm"
      style={{
        backdropFilter: "blur(28px)",
        padding: "2%",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        width: "100%",
        marginTop: "3%",
      }}
    >
      <h1>Formulario de Adopcion</h1>
      <h2>Contanos como quisieras que sea tu amigo perruno ideal </h2>
      <div className="form" style={{ display: "flex", flexDirection: "row" }}>
        <form onSubmit={handleOnSubmit} action="" style={{ width: "40%" }}>
          {/* Nombre */}
          <div>
            <label htmlFor="email">
              Correo electrónico
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={mascota.email}
                onChange={handleOnChange}
                required
              />
            </label>
          </div>

          <br />
          {/* Personalidad */}
          <div>
            <label>
              Habilidades Caninas
              {skillsCans.map((checkbox, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    name={checkbox.name}
                    onChange={() => {}}
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
              <select id="select" value={mascota.raza} onChange={() => {}}>
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
                  <input
                    type="radio"
                    name="big"
                    value="Big"
                    // checked={selectedRadio === 'Big'}
                    // onChange={handleRadioChange}
                  />
                  Big Dog
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="little"
                    value="Little"
                    // checked={selectedRadio === 'Little'}
                    // onChange={handleRadioChange}
                  />
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

        <div
          style={{
            width: "100%",
            backgroundImage: 'url("/backgroundDog.png")',
            backgroundSize: "cover",
          }}
        >
          {/* blabla */}
        </div>
      </div>
    </div>
  );
}

export default Form;

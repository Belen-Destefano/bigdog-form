import swal from "@sweetalert/with-react";
import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import SecretComponent from "./components/secretComponent";

function BigdogForm() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSecretComponent, setShowSecretComponent] = useState(false);
  const [email, setEmail] = useState("");
  const [checkboxValues, setCheckboxValues] = useState([
    { name: "Cazador", checked: false },
    { name: "Amigable", checked: false },
    { name: "Developer", checked: false },
    { name: "Sabueso", checked: false },
    { name: "Guardian", checked: false },
  ]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    // console.log(`Nombre: ${e.target.value}`);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevState) =>
      prevState.map((checkbox) =>
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

  const resetForm = () => {
    setEmail("");
    setCheckboxValues(
      checkboxValues.map((checkbox) => ({ ...checkbox, checked: false }))
    );
    setSelectedOption("");
    setSelectedRadio("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
   

    const selectedCheckboxValues = checkboxValues.filter(
      (checkbox) => checkbox.checked
    );
 
    const isDeveloper = selectedCheckboxValues.some(
      (checkbox) => checkbox.name === "Developer"
    );
    

    if (
      isDeveloper &
      (selectedRadio === "Big") &
      (selectedOption === "Developer")
    ) {
      setShowSpinner(true);

      setTimeout(() => {
        setShowSpinner(false);
        setShowSecretComponent(true);
      }, 2000);

      resetForm();
    } else {
      swal({
        title:
          "¡Recibimos las características que buscas en tu nuevo amigo peludo!",
        text: "Te enviaremos un mail en cuanto encontremos un perro con esas especificaciones. Esperamos poder acercarte a ese fiel amigo que hará que tu vida sea aún más especial.",

        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "",
          closeModal: true,
        },
        ButtonColor: "#777953",
      });
      resetForm();
    }
  };

  const handleClick = () => {
    setShowSecretComponent(false);
    document.body.style.backgroundImage = "url(/background1.jpg)";
  };

  if (showSpinner) {
    return (
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <img
          className="spinner"
          style={{ width: "100%" }}
          src="https://i.pinimg.com/originals/c5/9a/d2/c59ad2bd4ad2fbacd04017debc679ddb.gif"
          alt="Loading..."
        />
      </div>
    );
  }

  if (showSecretComponent) {
    return <SecretComponent handleClick={handleClick} />;
  }

  return (
    <Form
      handleInputChange={handleInputChange}
      handleCheckboxChange={handleCheckboxChange}
      handleSelectChange={handleSelectChange}
      handleRadioChange={handleRadioChange}
      handleFormSubmit={handleFormSubmit}
      email={email}
      checkboxValues={checkboxValues}
      selectedOption={selectedOption}
      selectedRadio={selectedRadio}
    />
  );
}

export default BigdogForm;

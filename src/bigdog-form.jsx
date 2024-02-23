import "./App.css";
import swal from "@sweetalert/with-react";
import { useState } from "react";
import Formu from "./components/form";
import SecretComponent from "./components/secretComponent";

function BigdogForm() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSecretComponent, setShowSecretComponent] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);     
    const mascota = Object.fromEntries(formData.entries()); 
    console.log({ mascota });    

    if (
      mascota.raza === "Developer" &&
      mascota.tamaño === "Big" &&
      mascota.Developer
    ) {
      setShowSpinner(true);

      setTimeout(() => {
        setShowSpinner(false);
        setShowSecretComponent(true);
      }, 2000);
    } else {
      swal({
        title:
          "¡Recibimos las características que buscas en tu nuevo amigo peludo!",
        text:
          "Te enviaremos un mail en cuanto encontremos un perro con esas especificaciones. Esperamos poder acercarte a ese fiel amigo que hará que tu vida sea aún más especial.",

        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "",
          closeModal: true,
        },
        ButtonColor: "#777953",
      });
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

  return <Formu onSubmit={handleOnSubmit} />;
}

export default BigdogForm;

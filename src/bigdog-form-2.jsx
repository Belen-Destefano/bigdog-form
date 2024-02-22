import "./App.css";
import Form from "./components/formRodri";

function BigdogForm2() {
  

  const handleOnSubmit = (values) => console.log(values);

  return <Form onSubmit={handleOnSubmit} />;
}

export default BigdogForm2;

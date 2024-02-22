import React from "react";
import ReactDOM from "react-dom/client";
import BigdogForm2 from "./bigdog-form-2.jsx";
import BigdogForm from "./bigdog-form.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BigdogForm />
    <BigdogForm2 />
  </React.StrictMode>
);

// import React from 'react'
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx'
// import './index.css'

// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render( <React.StrictMode>
//   <App />
// </React.StrictMode>,);

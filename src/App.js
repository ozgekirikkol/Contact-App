import "./App.css";
import List from "./List.js";
import Form from "./Form.js";
import { useState } from "react";

function App() {
  const [contact, setContact] = useState([
    {
      fullname: "Lewis Hamilton",
      phoneNumber: "531 555 55 55",
    },
    {
      fullname: "Lando Norris",
      phoneNumber: "555 555 55 55",
    },
    {
      fullname: "Pierre Gasly",
      phoneNumber: "539 555 55 55",
    },
    {
      fullname: "Sebastian Vettel",
      phoneNumber: "538 555 55 55",
    },
    {
      fullname: "Fernando Alonso",
      phoneNumber: "538 555 55 55",
    },
    {
      fullname: "Sergio Perez",
      phoneNumber: "538 555 55 55",
    },
  ]);

  return (
    <div id="contacts-app">
      <div target="_blank" className="app-title">
        <h1>Contacts App</h1>
      </div>
      <List contacts={contact} />
      <Form addForm={setContact} contact={contact} />
    </div>
  );
}

export default App;

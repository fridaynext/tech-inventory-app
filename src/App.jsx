import "./App.css";
import { useState } from "react";

// TODO: Make the header more interesting
function Header({ name, year }) {
  return (
    <header className="">
      <h1>{name}'s Cable Tech Inventory </h1>
      <p className="font-light">Version {year}.0</p>
    </header>
  );
}

// TODO: This can get more complex and in its own file soon
const cableCollection = [
  "USB-c to USB-A Adapter",
  "USB mini-B to USB-A Adapter",
  "USB-C to USB-B Adapter",
  "USB-B to USB-C Adapter",
  "Lightning Cable",
  "Micro USB to Lightning Cable",
];

const cableObjects = cableCollection.map((item, index) => ({
  id: index,
  title: item,
}));

function CableList({ cables }) {
  return (
    <>
      <ul>
        {cables.map((cable) => (
          <li
            key={cable.id}
            style={{ listStyleType: "none" }}
            className="list-item"
          >
            {cable.title}
          </li>
        ))}
      </ul>
    </>
  );
}

function CableForm({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-10"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 shadow-lg z-20">
            <form>
              <label htmlFor="cableName">Enter cable name:</label>
              <input type="text" id="cableName" />
              <button type="submit">Add Cable</button>
            </form>
            <button onClick={onClose}>Close</button>
          </div>
        </>
      )}
    </>
  );
}

function CableItem() {}

function Main() {
  return (
    <>
      <div>
        <h2>Here is your current inventory of cables:</h2>
      </div>
      <main>
        <CableList cables={cableObjects} />
      </main>
    </>
  );
}

function App() {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <>
      <Header name="Casey" year={new Date().getFullYear()} />
      <button onClick={() => setFormIsOpen(!formIsOpen)}>Add Item</button>
      <CableForm isOpen={formIsOpen} onClose={() => setFormIsOpen(false)} />
      <Main />
    </>
  );
}

export default App;

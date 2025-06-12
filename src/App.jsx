import './App.css'

// TODO: Make the header more interesting
function Header({ name, year }) {
  return (
    <header className="">
      <h1>{name}'s Cable Tech Inventory </h1>
      <p className="font-light">Version {year}.0</p>
    </header>
  )
}

// TODO: This can get more complex and in its own file soon
const cableCollection = [
  "USB-c to USB-A Adapter",
  "USB mini-B to USB-A Adapter",
  "USB-C to USB-B Adapter",
  "USB-B to USB-C Adapter",
  "Lightning Cable",
  "Micro USB to Lightning Cable"
]

const cableObjects = cableCollection.map((item, index) => ({
  id: index,
  title: item
}))

function CableList() {

}

function CableForm() {

}

function CableItem() {

}

function Main({ cables }) {
  return (
    <>
      <div>
        <h2>Here is your current inventory of cables:</h2>
      </div>
      <main>
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
      </main>
    </>
  )
}

function App() {
  return (
    <>
      <Header name="Casey" year={new Date().getFullYear()} />
      <Main cables={cableObjects} />
    </>
  )
}

export default App

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
const cables = [
  "USB-c to USB-A Adapter",
  "USB mini-B to USB-A Adapter",
  "USB-C to USB-B Adapter",
  "USB-B to USB-C Adapter",
  "Lightning Cable",
  "Micro USB to Lightning Cable"
]

const cableObjects = cables.map((item, index) => ({
  id: index,
  title: item
}))

function CableList() {

}

function CableForm() {

}

function CableItem() {

}

function Main({ Cables }) {
  return (
    <>
      <div>
        <h2>Here is your current inventory of cables:</h2>
      </div>
      <main>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              style={{ listStyleType: "none" }}
              className="list-item"
            >
              {item.title}
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
      <Main items={cableObjects} />
    </>
  )
}

export default App

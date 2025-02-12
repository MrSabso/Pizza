const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
   
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
  </div>
  )

}

export default App;


function Header () {
  return(
    <header className="header">
      <h1>Fast React Pizza</h1>
    </header>
  )
}

function Menu () {

  return(
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        {
          pizzaData.map((el, index) => (
            <Pizza 
            key={index}
            name={el.name}
            ingredients={el.ingredients}
            photoName={el.photoName}
            price={el.price} 
            soldOut={el.soldOut}
            />
          ))
        }
      </ul>
    </main>
  )
}

function Pizza ({ photoName, name, ingredients, price, soldOut }) {

  return(
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  )
}

function Footer () {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour; 



  return(
    <footer className="footer">
      {
        isOpen ? (
            <div className="order">
            <p>
              We're open from {openHour}:00 to {closeHour}:00. <br />
              Come visit us or order online
            </p>
            <button className="btn">Order</button>
          </div>
        ):(
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00
          </p>
        )
      }
    </footer>
  )
}
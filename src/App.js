import logo from './logo.svg';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
      
      
    </div>
  );
}

export default App;

function Header(){
 return <div className='header'> <h1>FAST REACT PIZZA CO.</h1></div>
}
function Footer(){
  const time = new Date().getHours();
  console.log(time);
  return <footer style={{textAlign:"center", color : "red"}}> We're happy to welcome
    you between {time}
    
  </footer>
}
function Menu(){
  return(
    <div className='menu'>
  <h2>OUR MENU</h2>
  <p>Authentic Italian cuisine. 6 creative
    dishes to choose from. All from <br></br>
    our stone oven, all organic, all delicious.
  </p>
  <Pizza1 />
  <Pizza2 />
  <Pizza3 />
  <Pizza4 />
  <Pizza5 />
  <Pizza6 />
  </div>
  )
}
function Pizza1(){
  return (
  <div className ='pizza'>
    <img src="./pizzas/focaccia.jpg"></img>
    <h3>Focaccia</h3>
    <p>Bread with italian olive oil and rosemary.</p>
    <span>6</span>
  </div>
  
  )
  
}
function Pizza2(){
  return (
  <div className = 'pizza'>
    <img src="./pizzas/margherita.jpg"></img>
    <h3>Pizza Margherita</h3>
    <p>Tomato and mozarella</p>
    <span>10</span>
  </div>
  
  )
  
}
function Pizza3(){
  return (
  <div className = 'pizza'>
    <img src="./pizzas/spinaci.jpg"></img>
    <h3>Pizza Spinaci</h3>
    <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    <span>12</span>
  </div>
  
  )
  
}
function Pizza4(){
  return (
  <div className = 'pizza'>
    <img src="./pizzas/funghi.jpg"></img>
    <h3>Pizza Funghi</h3>
    <p>Tomato, mozarella, mushrooms, and onion</p>
    <span>12</span>
  </div>
  
  )
  
}
function Pizza5(){
  return (
  <div className = 'pizza'>
    <img src="./pizzas/salamino.jpg"></img>
    <h3>Pizza Salamino</h3>
    <p>Tomato, mozarella, and pepperoni</p>
    <span>SOLD OUT</span>
  </div>
  
  )
  
}
function Pizza6(){
  return (
  <div className = 'pizza'>
    <img src="./pizzas/Prosciutto.jpg"></img>
    <h3>Pizza Prosciutto</h3>
    <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    <span>18</span>
  </div>
  
  )
  
}

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}
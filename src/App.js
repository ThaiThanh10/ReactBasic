import './App.css';
import './header.scss'
import List from './Components/List'
import Products from './Components/Products'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>REACT BASIC SHOP</h1>
          <div className="nav">
            <input type="text" placeholder='Tìm sản phẩm' />
            <button>Search</button>
          </div>
        </div>
        <ul>          
          <List name='Phones'/>
          <List name='Laptop'/>
          <List name='Tablet'/>
          <List name='Screen'/>
        </ul>
      </header>
      <body>
        <section class="my-shop">
          <div className="container">
            <div className="products">
              <Products name='Phones' />
              <Products name='Laptop' />
              <Products name='Tablet' />
              <Products name='Screen' />
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;

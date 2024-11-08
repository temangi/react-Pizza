import Header from "./components/Header/Header";
import "./App.css";
import Catalog from "./components/Catalog/catalog";
import PizzaList from "./components/PizzaList/PizzaList";
import { Provider } from "react-redux";
import store from "./components/store/store";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Basket from "./components/Basket/Basket";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={
         <Provider store={store}>
          <Header />
          <Catalog />
          <PizzaList />
          </Provider>
        }/>
        <Route path='/basket' element={
          <Provider store={store}>
            <Basket/>
          </Provider>
        } />
      </Routes>
    </Router>
    </>
  );
}

export default App;

import logo from "../../assets/logo.svg";
import css from "./Header.module.css";
import teleshka from "../../assets/teleshka.svg"
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {

  const {pathname} = useLocation()

  const [price,setPrice] = useState(0)

  const arr = useSelector(state => state.cart)

  useEffect(() => {
    let pricePizzas = 0
    arr.forEach(el => pricePizzas += el.pricePizza * (el.counterPizza + 1)  )
    setPrice(pricePizzas)
  },[arr])

  return (
    <section className={css.header}>
      <div className={css.header_left}>
        <img src={logo} alt="" />
        <div className={css.header__logo}>
          <p>REACT PIZZA</p>
          <span>{pathname == "/" ? "самая вкусная пицца во вселенной" : "самая реактивная пицца"}</span>
        </div>
      </div>
      {pathname == "/" && (
   <Link to={"/basket"} onClick={() => localStorage.setItem("array",JSON.stringify(arr))}>
     <button className={css.btn}>
        <p>{price} som</p>
        <div className={css.btn__teleshka}>
            <img src={teleshka} alt="" />
            <p>{arr.length}</p>
        </div>
    </button>
   </Link>

)}

    </section>
  );
};

export default Header;

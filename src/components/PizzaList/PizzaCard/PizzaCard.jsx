import { useEffect, useState } from "react";
import css from "./Pizza.module.css";
import plus from "../../../assets/plus.svg";
import plus2 from "../../../assets/plus2.svg";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../store/action";
import { reducationCart } from "../../store/action";

const size = ["26см", "30см", "40см"];
const choice = ["тонкое", "традиционое"];

const PizzaCard = ({ img, title, price }) => {
  const [sizePizza, setSizePizza] = useState("26см");
  const [choicePizza, setChoicePizza] = useState("тонкое");
  const [counter, setCounter] = useState(0);
  const arr = useSelector((state) => state.cart);
  const dispatch = useDispatch();



  const sizes = size.map((el, index) => {
    return (
      <p
        onClick={() => setSizePizza(el)}
        className={
          el === sizePizza ? css.pizzaSize_active : css.pizzaSize_noActive
        }
        key={index}
      >
        {el}
      </p>
    );
  });
  const choices = choice.map((el, index) => {
    return (
      <p
        onClick={() => setChoicePizza(el)}
        className={
          el === choicePizza ? css.pizzaChoice_active : css.pizzaChoice_noActive
        }
        key={index}
      >
        {el}
      </p>
    );
  });

  const handleClick = () => {
    setCounter((prev) => prev + 1);
    const itemIndex = arr.findIndex(
      (el) =>
        el.titlePizza === title &&
        el.size === sizePizza &&
        el.choice === choicePizza
    );
    
    if (itemIndex !== -1) {
      const newArr = arr.map((el, index) => {
        if (index === itemIndex) {
          return { ...el, counterPizza: el.counterPizza + 1 };
        }
        return el;
      });
      dispatch(reducationCart(newArr));
    } else {
      dispatch(
        addCart({
          image: img,
          titlePizza: title,
          pricePizza: price,
          size: sizePizza,
          choice: choicePizza,
          counterPizza: counter,
        })
      );
    }
    
  }

  return (
    <section className={css.pizzaCard}>
      <img className={css.pizzaLogo} src={img} alt="" />
      <h1 className={css.pizzaTitle}>{title}</h1>
      <div className={css.pizzaChoice}>
        <header className={css.pizzaChoice_header}>{choices}</header>
        <footer className={css.pizzaChoice_footer}>{sizes}</footer>
      </div>
      <footer className={css.pizzaFooter}>
        <p>от {price} сом</p>
        <button
          className={counter > 0 ? css.btn_active : css.btn_noActive}
          onClick={handleClick}
        >
          <img src={counter > 0 ? plus : plus2} alt="" />
          <p>Добавить</p>
          <span>{counter > 0 ? counter : " "}</span>
        </button>
      </footer>
    </section>
  );
};

export default PizzaCard;

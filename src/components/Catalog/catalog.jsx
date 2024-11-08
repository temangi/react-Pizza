import { useEffect, useState } from "react";
import css from "./catalog.module.css";
import { filterPizza } from "../store/action";
import { choicePizza } from "../store/action";
import { useDispatch } from "react-redux";

const arrCatlogs = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const arrChoice = ["по популярности", "по цене", "по алфавиту"];

const Catalog = () => {
  const [choice, setChoice] = useState("Все");
  const [open, setOpen] = useState(true);
  const [filter, setFilter] = useState("по популярности");
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(filterPizza(filter))
    dispatch(choicePizza(choice))
  },[choice,filter])

  const btns = () =>
    arrCatlogs.map((el, index) => {
      return (
        <button
          key={index}
          onClick={() => setChoice(el)}
          className={
            choice == el
              ? css.catalog__btn_active
              : css.catalog__btn_noActive
          }
        >
          {el}
        </button>
      );
    });

  const closeFilter = (index) => {
    setFilter(index);
    setOpen(!open);
  };

  const btnChoice = () =>
    arrChoice.map((el, index) => {
      return (
        <p
          onClick={() => closeFilter(el)}
          className={css.choiceFilter}
          key={index}
        >
          {el}
        </p>
      );
    });

  return (
    <section className={css.catalog}>
      <div className={css.catalog__button}>{btns()}</div>
      <div className={css.catalog__button_right} onClick={() => setOpen(!open)}>
        Cортировка по : {filter}
      </div>
      <div className={open ? css.choice_noActive : css.choice_active}>
        {btnChoice()}
      </div>
    </section>
  );
};

export default Catalog;

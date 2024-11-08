import Header from "../Header/Header"
import css from "./Basket.module.css"
import bascet from "../../assets/basket.png"
import { useEffect, useState } from "react"
import { reducationCart } from "../store/action"
import { useDispatch } from "react-redux"

const Basket = () => {

    const dispatch = useDispatch()

    const [carts,setCarts] = useState(JSON.parse(localStorage.getItem("array")) || [])

    useEffect( () => {
        localStorage.setItem("array",JSON.stringify(carts))
        dispatch(reducationCart(carts))
    },[carts])
    
    const deletePizza = (id) => {
        setCarts(carts.filter((el,index) => index != id ))
    }

    const pizzaCarts = carts.map((el, index) => {
        return (
            <div className={css.basket__list} key={index}>
                <img className={css.basket__img} src={el.image} alt="" />
                <div className={css.basket__li}>
                    <p className={css.basket__logo}>{el.titlePizza}</p>
                        <span className={css.basket__froot}>{el.choice} тесто,{el.size}</span>
                </div>
                <div className={css.counter}>
                    <button className={css.button}>-</button>
                    <span>{el.counterPizza + 1}</span>
                    <button className={css.button}>+</button>
                    <p className={css.counter__li}>{el.pricePizza}</p>
                    <button onClick={() => deletePizza(index)} className={css.btn}>x</button>
                </div>
               
            </div>
            
        )
    })
    
    return (
        <>
            {
                carts.length ?(
                    <>
                <Header />
            <section className={css.basket}>
                <div className={css.basket__title}>
                    <img src={bascet} alt="" />
                    <h1>Корзина</h1>
                    <span onClick={() => setCarts([])} className={css.basket__right}>Очистить корзину</span>
                </div>

                <main>
                    {pizzaCarts}
                </main>

            </section>
                    </>
                ): (
                    <>
                      <Header/>   
                      <h1>Ничего нет</h1>

                    </>
                  
                )
            }
        </>
    )
}

export default Basket
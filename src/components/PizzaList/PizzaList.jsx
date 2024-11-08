import pizza from "../../assets/pizza.svg"
import PizzaCard from "./PizzaCard/PizzaCard"
import css from "./PizzaList.module.css"
import pizza2 from "../../assets/pizza2.svg"
import pizza3 from "../../assets/pizza3.svg"
import pizza4 from "../../assets/pizza4.svg"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const infoPizzas = [
    {
        title : "Чизбургер-пицца",
        img : pizza,
        price : 490
    }, 
    {
        title : "Сырная",
        img : pizza2,
        price : 600
    },
    {
        title : "Креветки-по-азиатски",
        img : pizza3,
        price : 700
    },
    {
        title : "Сырный-цыпленок",
        img : pizza4,
        price :  900
    },
    {
        title : "Чизбургер-пицца",
        img : pizza,
        price : 490
    }, 
    {
        title : "Сырная",
        img : pizza2,
        price : 600
    },
    {
        title : "Креветки-по-азиатски",
        img : pizza3,
        price : 700
    },
    {
        title : "Сырный-цыпленок",
        img : pizza4,
        price :  900
    },
    {
        title : "Чизбургер-пицца",
        img : pizza,
        price : 490
    }, 
    {
        title : "Сырная",
        img : pizza2,
        price : 600
    },
    {
        title : "Креветки-по-азиатски",
        img : pizza3,
        price : 700
    },
    {
        title : "Сырный-цыпленfafa",
        img : pizza4,
        price :  900
    },
    
]


console.log("Сырный-цыпленок" > "Креветки-по-азиатски")


const PizzaList = () => {

    const [arr,setArr] = useState(infoPizzas)

    const filter = useSelector(state => state.filter)

    useEffect(() => {
        if (filter === "по цене") {
          const sortedArr = [...arr].sort((a, b) => a.price - b.price);
          setArr(sortedArr);

        }else if (filter === "по алфавиту") {
          const sortedArr = [...arr].sort((a, b) => {
            if (a.title < b.title){
                return -1
            }else{
                return 1
            }
          });
          setArr(sortedArr);
        }else {
          setArr(infoPizzas);
        }
      }, [filter]);
      




    const pizzas = arr.map((el,index) => <PizzaCard key={index} {...el} />)

    return(
        <section className={css.pizzaList}> 
            <h1>Все пиццы</h1>
            <main className={css.pizzaMain}>
                {pizzas}
            </main>
        </section>
    )
}


export default PizzaList
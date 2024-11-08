export const filterPizza = (text) => ({
    type : "FILTER_PIZZA",
    payload : text
})
export const choicePizza = (text) => ({
    type : "CHOICE_PIZZA",
    payload : text  
})

export const addCart = (obj) => ({
    type : "ADD_TO_CART",
    payload : obj
})

export const reducationCart = (array) => ({
    type : "REDUCATION_CART",
    payload : array
})
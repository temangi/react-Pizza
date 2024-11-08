import { createStore } from 'redux';
import forCart from './reducer';

const store = createStore(forCart)

export default store
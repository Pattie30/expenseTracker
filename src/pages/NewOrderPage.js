//import logo from './logo.svg';
import {useState} from 'react'
const NewOrderPage = () => {



const createOrder = async (order) => {
  const res = await fetch('/orders/new', order, 'post')
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <form onSubmit={createOrder}>

      </form>
    </div>
  );
}
}
export default NewOrderPage;

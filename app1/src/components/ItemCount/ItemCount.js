import './ItemCount.css';
import {useState} from 'react';

const Counter = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const decrement = () =>{
        setCount(count-1);
    }

    const increment = () =>{
        setCount(count+1);
    }
    return(
        <div className='container_father'>
            <div className='count_container'>
                <button disabled={count === initial} className='count_button' onClick={decrement}>-</button>
                <p>{count}</p>
                <button disabled={count === stock} className='count_button' onClick={increment}>+</button>
            </div>
            <button disabled={stock === 0 ? true : null} onClick={() => onAdd(count)} className='cart_button'>Agregar al <img className='img_cart' src='images/cart.png' alt='cart'/></button>
        </div>
    );
}

export default Counter;
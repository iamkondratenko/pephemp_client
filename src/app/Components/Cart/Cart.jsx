// Cart.js
import React from 'react';
import { useCart } from '@/app/contexts/CartContext'; // Путь к вашему CartContext
import style from './Cart.module.css'
import Image from 'next/image';


const Cart = ({ onClose }) => {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const handleUpdateQuantity = (item, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
  };

  const toggleCartVisibility = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  return (
    <div className={style.ModalWraper}  style={{ zIndex: state.isOpen ? '0' : '200', opacity: state.isOpen ? '0' : '1', transitionDuration:'300ms'}}>
      <div className={style.Modal} style={{ zIndex: state.isOpen ? '0' : '200', filter: state.isOpen ? 'blur(5px)' : 'blur(0)', opacity: state.isOpen ? '0' : '1' }}>
        <header className={style.Header}>
          <h3>Кошик</h3>
          <div className={''}><button style={{color: '#2121267d'}} className={style.QuantityButton} onClick={toggleCartVisibility}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 36 36"><path fill="currentColor" d="m19.41 18l7.29-7.29a1 1 0 0 0-1.41-1.41L18 16.59l-7.29-7.3A1 1 0 0 0 9.3 10.7l7.29 7.3l-7.3 7.29a1 1 0 1 0 1.41 1.41l7.3-7.29l7.29 7.29a1 1 0 0 0 1.41-1.41Z" className="clr-i-outline clr-i-outline-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg></button></div>
        </header>
        {/* ... (ваш код отображения корзины) */}
        <ul className={style.Products}>
          {state.items.map((item) => (
            <li key={item.id} className={style.Product} style={{backgroundColor: item.bg + '20'}}>
              <div className={style.ImageWrapper}>
              <Image
                  src={item.img}
                  alt="Your Logo"
                  layout="intrinsic"
                  width={138} // Set the width you desire
                  height={429} // Set the height you desire
              />
              </div>

              <div className={style.TextWrapper}>
                  <h3 className={style.ProductTitle}>{item.title}</h3>
                  <p>{item.price}</p>
                  <p>Quantity: </p>
              </div>
                  <div className={style.QuantityWraper}>
                  <button className={style.QuantityButton} onClick={() => handleUpdateQuantity(item, item.quantity + 1)}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 36 36"><path fill="currentColor" d="M26.17 17H19V9.83a1 1 0 0 0-2 0V17H9.83a1 1 0 0 0 0 2H17v7.17a1 1 0 0 0 2 0V19h7.17a1 1 0 0 0 0-2" className="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14" className="clr-i-outline clr-i-outline-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg></button>
                  {item.quantity}
                  <button className={style.QuantityButton} onClick={() => handleUpdateQuantity(item, item.quantity - 1)}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 36 36"><path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14" className="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="M24 17H12a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2" className="clr-i-outline clr-i-outline-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg></button>
              </div>
              
              <button style={{color: '#2121267d'}} className={style.QuantityButton} onClick={() => handleRemoveItem(item)}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 36 36"><path fill="currentColor" d="m19.41 18l7.29-7.29a1 1 0 0 0-1.41-1.41L18 16.59l-7.29-7.3A1 1 0 0 0 9.3 10.7l7.29 7.3l-7.3 7.29a1 1 0 1 0 1.41 1.41l7.3-7.29l7.29 7.29a1 1 0 0 0 1.41-1.41Z" className="clr-i-outline clr-i-outline-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;

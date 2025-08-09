import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart(){
  const [items, setItems] = React.useState([]);
  React.useEffect(()=>{
    setItems(JSON.parse(localStorage.getItem('cart')||'[]'));
  }, []);

  const update = (slug, delta) => {
    const next = items.map(i => i.slug===slug? { ...i, qty: Math.max(1, i.qty+delta)}: i);
    setItems(next);
    localStorage.setItem('cart', JSON.stringify(next));
  };

  const removeItem = (slug) => {
    const next = items.filter(i=>i.slug!==slug);
    setItems(next);
    localStorage.setItem('cart', JSON.stringify(next));
  };

  const total = items.reduce((s,i)=> s + i.price*i.qty, 0);

  return (
    <div className="container">
      <h2>Your cart</h2>
      {items.length===0? <p>Cart is empty</p> : (
        <div>
          {items.map(i => (
            <div key={i.slug} className="cart-row">
              <div>{i.name}</div>
              <div>${i.price.toFixed(2)}</div>
              <div>
                <button onClick={()=>update(i.slug,-1)}>-</button>
                <span className="qty">{i.qty}</span>
                <button onClick={()=>update(i.slug,1)}>+</button>
              </div>
              <div>${(i.price*i.qty).toFixed(2)}</div>
              <button onClick={()=>removeItem(i.slug)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link className="cta" to="/checkout">Checkout</Link>
        </div>
      )}
    </div>
  );
}
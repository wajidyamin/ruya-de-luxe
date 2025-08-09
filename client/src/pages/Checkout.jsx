import React from 'react';

export default function Checkout(){
  const [form, setForm] = React.useState({ name:'', email:'', phone:'', address:'' });
  const [ok, setOk] = React.useState('');

  const cart = JSON.parse(localStorage.getItem('cart')||'[]');
  const total = cart.reduce((s,i)=> s + i.price*i.qty, 0);

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/orders', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart, customer: form })
    });
    const data = await res.json();
    if(data.ok){
      localStorage.removeItem('cart');
      setOk('Order placed. We will contact you soon.');
    }
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      {cart.length===0? <p>Your cart is empty</p> : (
        <div>
          <p>Total: ${total.toFixed(2)}</p>
          <form className="checkout" onSubmit={submit}>
            <input placeholder="Full name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required/>
            <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required/>
            <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} required/>
            <textarea placeholder="Address" value={form.address} onChange={e=>setForm({...form, address:e.target.value})} required/>
            <button type="submit">Place order</button>
          </form>
          {ok && <p className="ok">{ok}</p>}
        </div>
      )}
    </div>
  );
}
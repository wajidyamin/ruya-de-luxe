import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(){
  const nav = useNavigate();
  const [q, setQ] = React.useState('');
  return (
    <header className="nav">
      <div className="brand" onClick={() => nav('/')}>Ruya_de_Luxe</div>
      <nav>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <form onSubmit={(e)=>{e.preventDefault(); nav(`/products?q=${encodeURIComponent(q)}`)}}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search" />
      </form>
    </header>
  );
}
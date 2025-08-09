import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetail(){
  const { slug } = useParams();
  const nav = useNavigate();
  const [p, setP] = React.useState(null);
  React.useEffect(()=>{ (async ()=>{
    const r = await fetch(`/api/products/${slug}`);
    if(r.status===404) return setP(null);
    setP(await r.json());
  })(); }, [slug]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')||'[]');
    const existing = cart.find(i => i.slug === p.slug);
    if(existing) existing.qty += 1; else cart.push({ slug: p.slug, name: p.name, price: p.price, qty: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    nav('/cart');
  };

  if(p === null) return <div className="container"><p>Not found</p></div>;
  if(!p) return <div className="container"><p>Loading...</p></div>;

  return (
    <div className="container product">
      <img src={p.imageUrl || '/placeholder.png'} alt={p.name} />
      <div>
        <h2>{p.name}</h2>
        <p className="price">${p.price?.toFixed(2)}</p>
        <p>{p.description}</p>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
}
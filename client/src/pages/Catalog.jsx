import React from 'react';
import ProductCard from '../components/ProductCard.jsx';

async function fetchProducts(q, category){
  const url = new URL('/api/products', window.location.origin);
  if(q) url.searchParams.set('q', q);
  if(category) url.searchParams.set('category', category);
  const r = await fetch(url);
  return r.json();
}

export default function Catalog(){
  const [items, setItems] = React.useState([]);
  const [q, setQ] = React.useState(new URLSearchParams(location.search).get('q')||'');
  const [category, setCategory] = React.useState('');

  React.useEffect(()=>{ (async ()=>setItems(await fetchProducts(q, category)))(); }, [q, category]);

  return (
    <div className="container">
      <h2>Shop</h2>
      <div className="filters">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products" />
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          <option value="">All categories</option>
          <option>Serums</option>
          <option>Moisturizers</option>
          <option>Cleansers</option>
        </select>
      </div>
      <div className="grid">
        {items.map(p => <ProductCard key={p._id} p={p} />)}
      </div>
    </div>
  );
}
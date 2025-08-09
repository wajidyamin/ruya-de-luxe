import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({p}){
  return (
    <div className="card">
      <img src={p.imageUrl || '/placeholder.png'} alt={p.name} />
      <div className="card-body">
        <h4>{p.name}</h4>
        <p className="price">${p.price.toFixed(2)}</p>
        <p className="short">{p.short}</p>
        <Link to={`/product/${p.slug}`}>View</Link>
      </div>
    </div>
  );
}
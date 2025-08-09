import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Home(){
  return (
    <section className="hero">
      <img src={logo} alt="Ruya_de_Luxe" className="logo" />
      <h1>Welcome to Ruya_de_Luxe</h1>
      <p>Where Beauty Meets Purpose</p>
      <div className="copy">
        <p>At Ruya_de_Luxe, skincare is a ritual of self-love and elegance. Crafted with nature’s finest ingredients and modern science, our products deliver radiant glow and timeless beauty.</p>
        <p>Let every drop speak luxury. Let your skin tell your story.</p>
        <h3>Why Ruya_de_Luxe?</h3>
        <p>Because beauty should feel like a dream, pure, intentional, and effortless. "Ruya" means dream, and "de Luxe" reflects the quiet luxury your skin deserves.</p>
        <p>We blend nature’s purity with modern skincare science to create clean, effective, and cruelty-free products that elevate your daily routine into a self-care ritual.</p>
        <p>We believe in fewer products, better ingredients, and meaningful results. This is skincare that feels good, and does even better.</p>
        <p><strong>Simple. Luxurious. Dreamlike.</strong></p>
      </div>
      <Link to="/products" className="cta">Shop the collection</Link>
    </section>
  );
}
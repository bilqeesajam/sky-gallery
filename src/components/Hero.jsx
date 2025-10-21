import './Styling/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <img 
        src="/assets/images/SKY_20250915_220433.jpg" 
        alt="Sky view landscape" 
        loading="lazy"
      />
      <div className="hero-content">
        <h1 className="hero-title">That Sky Gallery</h1>
      </div>
    </section>
  );
}
 import k from '../assets/images/techg.webp';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
        <div className='image-container'>
            <img src={k} alt="Hero Image of a tech girl" className="girl"/>
        </div>
    </section>
  )
}

export default Hero
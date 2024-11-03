import { useEffect } from 'react';
import Typed from 'typed.js';
import profilePicture from '../assets/profile-picture.png';
import '../styles/Header.css';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  useEffect(() => {
    const typingEffect = new Typed(".typedText", {
      strings: ["Front End", "UI/UX"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <main className='wrapper'>
      <section className="featured-box" id="home">
        <div className="featured-text">
          <div className="featured-text-card">
            <span>Sulthan Zahran</span>
          </div>
          <div className="featured-name">
            <p>I'm <span className="typedText"></span></p>
          </div>
          <div className="featured-text-info">
            <p>"If you're not a good shot today, don't worry. There are other ways to be useful."
            </p>
          </div>
          <div className="featured-text-btn">
            <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
          </div>
          <div className="social_icons">
            <div className='icon'><a href="https://www.linkedin.com/in/muhammad-sulthan-zahran-48b69b270"><FaLinkedin /></a></div>
            <div className='icon'><a href="https://www.instagram.com/sulthanzahrann/"><FaInstagram /></a></div>
          </div>
        </div>
        <div className="featured-image">
          <div className="image">
            <img src={profilePicture} alt="avatar" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Header;

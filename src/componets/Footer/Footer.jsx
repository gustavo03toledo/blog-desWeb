import React from 'react';
import './Footer.scss';
import { Icon } from '@iconify/react';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
            <p>&copy; {new Date().getFullYear()} BLOG ccine-vibes. Todos os direitos reservados.</p>  
               
            <p className="footer-contact">Contato: blogccinevibes@blogccine.com</p>
        </div>
        
        <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:facebook" width="24" color='#fefefe' height="24" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:twitter" width="24" height="24"color='#fefefe' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:instagram" width="24" height="24" color='#fefefe' />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
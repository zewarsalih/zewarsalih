import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import { SiAzuredataexplorer } from 'react-icons/si';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <Link to='contact'>zewar.salih@gmail.com</Link>
            <Link to='contact'>(+46) 072-8698876</Link>            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{ pathname: 'https://github.com/zewarsalih'}} target='_blank'>GitHub</Link>
            <Link to={{ pathname: 'https://www.linkedin.com/in/zewar-salih-b6658b151'}} target='_blank'>LinkedIn</Link>
            <Link to={{ pathname: 'https://hupfront.com'}} target='_blank'>HupFront</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <SiAzuredataexplorer className='navbar-icon' />
              Zewar Salih
            </Link>
          </div>
          <small className='website-rights'>Zewar Salih © {new Date().getFullYear()} All rights reserved.</small>
          <div className='social-icons'>
            <Link to={{ pathname: 'https://github.com/zewarsalih'}} target='_blank' aria-label='GitHub' className='social-icon-link'>
              <FaGithub />
            </Link>
            <Link to={{ pathname: 'https://www.linkedin.com/in/zewar-salih-b6658b151' }} target='_blank' aria-label='LinkedIn' className='social-icon-link'>
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
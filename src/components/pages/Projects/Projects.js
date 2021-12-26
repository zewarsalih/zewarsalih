import React from 'react';
import { Button } from '../../Button';
import './Projects.css';
import { SiElectron } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { AiFillHtml5 } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';


function Projects() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='projects__section'>
        <div className='projects__wrapper'>
          <h1 className='projects__heading'>My projects</h1>
          <div className='projects__container'>
            <Link to={{ pathname: 'https://github.com/zewarsalih/electron-qualific.git' }} target='_blank' className='projects__container-card'>
              <div className='projects__container-cardInfo'>
                <div className='icon'>
                  <SiElectron />
                </div>
                <h3>Qualific</h3>
                <h3>Construction</h3>
                <ul className='projects__container-features'>
                  <li>A simple program to be able to fill out forms and print from the internal systems.</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  View Code
                </Button>
              </div>
            </Link>
            <Link to={{ pathname: 'https://hupfront.com/' }} target='_blank' className='projects__container-card'>
              <div className='projects__container-cardInfo'>
                <div className='icon'>
                  <GrReactjs />
                </div>
                <h3>Hupfront</h3>
                <h3>Developer</h3>
                <ul className='projects__container-features'>
                  <li>Simple website for web developers and description of the company's knowledge and information.</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  View Code
                </Button>
              </div>
            </Link>
            <Link to={{ pathname: 'https://bilmagasinet.nu/'}} target='_blank' className='projects__container-card'>
              <div className='projects__container-cardInfo'>
                <div className='icon'>
                  <AiFillHtml5 />
                </div>
                <h3>Bilmagasinet</h3>
                <h3>Car dealership</h3>
                <ul className='projects__container-features'>
                  <li>A website for a car dealership for easier contact and accessibility.</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  View Code
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Projects;

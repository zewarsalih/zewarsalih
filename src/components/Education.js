import React from 'react';
import { Button } from './Button';
import './Education.css';
import { CgWebsite } from 'react-icons/cg';
import { IoLogoJavascript } from 'react-icons/io';
import { SiSolidity } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';


function Education() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='education__section'>
        <div className='education__wrapper'>
          <h1 className='education__heading'>My educations</h1>
          <div className='education__container'>
            <Link to='files/Diploma_Lexicon.pdf' target='_blank' download='Diploma' className='education__container-card'>
              <div className='education__container-cardInfo'>
                <div className='icon'>
                  <CgWebsite />
                </div>
                <h3>Frontend developer</h3>
                <h3>Lexicon</h3>
                <h3>Stockholm</h3>
                <ul className='education__container-features'>
                  <li>UX/UI design</li>
                  <li>Backend</li>
                  <li>Vue JS</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Download
                </Button>
              </div>
            </Link>
            <Link to='files/Certificate_of_education.pdf' target='_blank' download='Certificate of education' className='education__container-card'>
              <div className='education__container-cardInfo'>
                <div className='icon'>
                  <IoLogoJavascript />
                </div>
                <h3>Javascript developer</h3>
                <h3>EC utbildning</h3>
                <h3>Stockholm</h3>
                <ul className='education__container-features'>
                  <li>Javascript</li>
                  <li>Angular</li>
                  <li>Agila Project</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Download
                </Button>
              </div>
            </Link>
            <Link to='files/Grade_2TE.pdf' target='_blank' download='Grade' className='education__container-card'>
              <div className='education__container-cardInfo'>
                <div className='icon'>
                  <SiSolidity />
                </div>
                <h3>Teknik & design</h3>
                <h3>Åva gymnasium</h3>
                <h3>Täby</h3>
                <ul className='education__container-features'>
                  <li>3D modeling</li>
                  <li>SOLIDWORKS 3D CAD</li>
                  <li>Computer science</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Download
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Education;

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'; // Custom CSS if needed
import hospitalLogo from '../images/gangaLogo.png'

const NavigationBar = () => {
  return (
    <div className='container-fluid'>
      <div className="wholeNav">

        <nav className="navbar navbar-expand-lg row">
          <div className='topNavLogo col-4'>
            <Link to="/" className="navbar-brand">
              <img className="hosLogo" src={hospitalLogo} alt="Hospital Logo" />
            </Link>
          </div>
          <div className="topNavItems navbar-collapse col-7">
            <ul className="navbar-nav">
              <li className="nav-item col-1">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item  col-2">
                <Link to="/departments" className="nav-link">Departments</Link>
              </li>
              <li className="nav-item col-1">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item col-2">
                <Link to="contact-us" className="nav-link">Contact us</Link>
              </li>
              <li className="nav-item col-4 ">
                <Link to="/link" className="nav-link">
                  <div className='topDiv'>
                    <div className='topSvgDiv'>
                      {/* <?xml version="1.0" ? */}
                      <svg class="icon icon-tabler icon-tabler-stethoscope" fill="none" height="24" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none" /><path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" /><path d="M8 15a6 6 0 1 0 12 0v-3" /><path d="M11 3v2" /><path d="M6 3v2" /><circle cx="20" cy="10" r="2" /></svg>
                    </div>
                    <div className='topDivSvgMsg'>
                      Book Appointment
                    </div>
                  </div>
                </Link>
              </li>
              <li className="nav-item col-3">
                <div className='topDiv'>
                  <div className='topSvgDiv searchSvgDiv'>
                    {/* <?xml version="1.0" ? */}
                    <svg className='searchSvg' enable-background="new 0 0 64 64" height="64px" id="Icons" version="1.1" viewBox="0 0 64 64" width="64px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="search">
                      <g><path d="M58,52L44,38c-0.583-0.583-1.292-0.875-2-0.875c-0.253,0-0.503,0.051-0.75,0.125l-1.979-1.979    C41.604,32.116,43,28.227,43,24c0-10.495-8.505-19-19-19S5,13.505,5,24s8.505,19,19,19c4.226,0,8.116-1.396,11.271-3.729    l1.979,1.979C36.968,42.189,37.209,43.209,38,44l14,14c0.583,0.583,1.292,0.875,2,0.875s1.417-0.292,2-0.875l2-2    C59.166,54.834,59.166,53.166,58,52z M24,42c-9.925,0-18-8.075-18-18S14.075,6,24,6s18,8.075,18,18S33.925,42,24,42z     M37.733,40.319l-1.653-1.653c0.942-0.777,1.809-1.644,2.586-2.586l1.653,1.653C40.211,37.817,40.102,37.898,40,38l-2,2    C37.898,40.102,37.817,40.211,37.733,40.319z M57.293,55.293l-2,2c-0.38,0.381-0.828,0.582-1.293,0.582s-0.913-0.201-1.293-0.582    l-14-14c-0.773-0.773-0.773-1.813,0-2.586l2-2c0.38-0.381,0.828-0.582,1.293-0.582s0.913,0.201,1.293,0.582l14,14    
C58.066,53.48,58.066,54.52,57.293,55.293z" fill="white" /><path d="M33.546,14.454c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707    c2.361,2.361,3.662,5.501,3.661,8.841c-0.001,3.339-1.301,6.477-3.661,8.837c-4.874,4.873-12.803,4.873-17.678,0    c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707c2.632,2.632,6.089,3.947,9.546,3.947s6.914-1.315,9.546-3.947    c2.549-2.549,3.953-5.938,3.954-9.544C37.5,20.396,36.097,17.004,33.546,14.454z" fill="white" /><g><path d="M24,8C15.178,8,8,15.178,8,24s7.178,16,16,16s16-7.178,16-16S32.822,8,24,8z M24,39     c-8.284,0-15-6.716-15-15S15.716,9,24,9s15,6.716,15,15S32.284,39,24,39z" fill="white" /></g></g></g></svg>                  </div>
                  <div className='topDivSvgMsg searchDivSvgMsg'>
                    <input className='searchInput' type="text" placeholder='Search Doctor...' />
                  </div>


                </div>
              </li>

            </ul>
          </div>

        </nav>
      </div>
    </div>

  );
}

export default NavigationBar;

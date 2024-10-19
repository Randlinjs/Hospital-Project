import React from 'react';
import { Link } from 'react-router-dom';
import '../css/TopNavBar.css'; // Custom styles if needed

const TopNavBar = () => {
  return (
    <ul className="TopNav nav nav-pills row justify-content-between">
      <li className="nav-item col-3">
        <Link to="/" className="nav-link" aria-current="page">  Tel: 0422 4250000</Link>
      </li>
      <li className="nav-item col-3">
        <Link to="/long-link" className="nav-link">div  info@gangahospital.net</Link>
      </li>
      <li className="nav-item col-3">
        <Link to="/link" className="nav-link">
          <div className='TopDiv'>
            <div className='TopDivSvg'>
              {/* <?xml version="1.0" ? */}
              <svg class="icon icon-tabler icon-tabler-stethoscope" fill="none" height="24" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none" /><path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" /><path d="M8 15a6 6 0 1 0 12 0v-3" /><path d="M11 3v2" /><path d="M6 3v2" /><circle cx="20" cy="10" r="2" /></svg>
            </div>
            <div className='TopDivSvgMsg'>
              Book Appointment
            </div>
          </div>
        </Link>
      </li>
      <li className="nav-item col-3">
        <div className='TopDiv'>
          <div className='TopDivSvg'>
            {/* <?xml version="1.0" ? */}
            <svg class="icon icon-tabler icon-tabler-stethoscope" fill="none" height="24" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none" /><path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" /><path d="M8 15a6 6 0 1 0 12 0v-3" /><path d="M11 3v2" /><path d="M6 3v2" /><circle cx="20" cy="10" r="2" /></svg>
          </div>
          <div className='TopDivSvgMsg'>
            Book Appointment
          </div>
        </div>      </li>
    </ul>
  );
};

export default TopNavBar;


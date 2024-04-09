import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='text-light py-3' style={{ backgroundColor: '#121212' }}>
      <div className="container text-center">
        <h5 className='mb-3'>
          All Rights Reserved &copy; Techninfoyt
        </h5>
        <p className="footer">
          <Link to='/about' className='text-light text-decoration-none mx-2'>
            About
          </Link>
          |
          <Link to='/contact' className='text-light text-decoration-none mx-2'>
            Contact
          </Link>
          |
          <Link to='/policy' className='text-light text-decoration-none mx-2'>
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;

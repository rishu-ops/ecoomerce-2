import React from 'react';
import Layout from '../components/layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';

const Contact = () => {
  return (
    <Layout title={'Contact Us'}>
      <div className="row contact-us">
      <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=740&t=st=1704711126~exp=1704711726~hmac=efd17c94e4c9a9ad82e412d521dc89b8b9625bacac8cfe6bf92ffaff7d09b45c"
            alt="contact-us"
            className="img-fluid" // Add 'img-fluid' for responsive images
            style={{ width: '90%', maxHeight: '390px' , minHeight : '300px' }} // Adjust max height as needed
          />
        </div>
        <div className="col-md-6">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any queries and information about products, feel free to call anytime. We are available 24x7.
          </p>
          <div className="contact-info mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </div>
          <div className="contact-info mt-3">
            <BiPhoneCall /> : 012-3456789
          </div>
          <div className="contact-info mt-3">
            <BiSupport /> : 1800-0000-0000 (toll-free)
          </div>
        </div>
       
      </div>
    </Layout>
  );
};

export default Contact;

import React from 'react';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <div className="pages contact">
        <h1 className="title">Contact Us</h1>
      </div>
      <div className="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.7093706210294!2d77.12334237550311!3d28.693798375631264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03dd4002a4ef%3A0x418a9f9ece7afe33!2sVishal%20Bharti%20Sr%20Sec%20School!5e1!3m2!1sen!2sin!4v1732364659739!5m2!1sen!2sin" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <ContactUs />
      <Footer />
    </>
  )
}

export default Contact

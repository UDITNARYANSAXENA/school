import React from 'react';
import { FaLocationArrow, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactAddress = () => {
  return (
    <div className="address">
        <div className="add">
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <p>Vishal Bharti Sr. Sec. School opposite D Block, Sarawati Vihar, <br />Parwana Road, Pitampura Delhi-110034 </p>
        </div>
        <div className="add">
          <div className="icon">
            <FaPhone />
          </div>
          <p>011-27026750 <br /> 27023377 <br /> 9354937851/54 </p>
        </div>
        <div className="add">
          <div className="icon">
            <FaLocationArrow />
          </div>
          <p>vbsschool.info@gmail.com</p>
        </div>
    </div>
  )
}

export default ContactAddress

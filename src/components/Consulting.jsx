import React from 'react';
import data from '../data/data.json';
import './ServicesPage.css';

const Consulting = () => {
  const { description, services } = data.consulting;

  return (
    <section id="service-section">
      <div className="text-wrapper">
      <h1 className='heading-gradient'>Consulting</h1>
      </div>
      <p className='para-primary'>{description}</p>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="service-list">
      {services.map((service, index) => (
        <div className="service">
           <div className="left">
            <h2>{service.type}</h2>
            <p>{service.description}</p>
           </div>
           {service.image && 
           <div className="right">
           <img src={service.image} alt="" />
          </div>}
        </div>
      ))}
      </div>
    </section>
  );
};

export default Consulting;
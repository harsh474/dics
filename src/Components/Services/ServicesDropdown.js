    // src/ServicesDropdown.js
import React, { useState, useEffect, useRef } from 'react';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const dropdownRef = useRef(null);

  const services = ['Web Development', 'App Development', 'SEO Optimization', 'Graphic Design'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-button">
          Services
      </button>
      {isOpen && (
        <ul className="dropdown-menu z-10">
          {services.map((service) => (
            <li
              key={service}
              className="dropdown-item"
              onClick={() => handleServiceClick(service)}
              
            >
              {service}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServicesDropdown;

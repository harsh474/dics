import React from 'react';
import ServiceCard from './ServiceCard';  // Adjust the import path as necessary
import image1 from "../images/i8.jpeg" ; 
import image2 from "../images/i9.jpeg" ; 
import image3 from "../images/i10.jpg" ; 

const services = [
  {
    image: image1,
    title: 'DESIGN & BUILD SERVICES',
    description: "As the design is the most critical aspect of any project, big or small, we provide vertical specific designing to optimize the flow, creativity, aesthetics, and functionality. We broadly take Healthcare, Industrial, and residential projects..",
  },
  {
    image: image3,
    title: 'INTERIORS CONTRACTING SERVICES',
    description: 'As the design is the most critical aspect of any project, big or small, we provide vertical specific designing to optimize the flow, creativity, aesthetics, and functionality.',
  },
  {
    image:image2 ,
    title: 'Vastu Shastra',
    description: 'Vastu Shastra is an ancient Indian science of architecture and buildings which helps in making a congenial setting or a place to live and work in a most scientific way, taking advantage of the benefits bestowed by nature, its elements, and energy fields for enhanced wealth, health, prosperity, and happiness.',
  },
 
 
  // Add more services as needed
];

const Services = () => {
  return (
    <div className='flex gap-2 py-[42px] bg-[#F7F6F7] justify-around px-[15px] flex-wrap'>
      {services.map((service, index) => (
        <div item key={index} >
          <ServiceCard
            image={service.image}
            title={service.title}
            description={service.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Services;

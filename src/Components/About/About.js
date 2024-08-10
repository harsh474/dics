import React from 'react';
import image1 from '../images/i11.jpg';
import image2 from '../images/i12.jpg';
import { Paper, Typography } from '@mui/material';
function About() {
  return (
    <div className=" pb-[1.3vw] container">
      <div className=" w-full ">
        <img src={image1} alt="About Us" className="w-full h-[222px] object-cover" />
      </div>
      <div className='flex justify-center mt-[1.2vw] mb-4'>
        <Typography variant="h4">About Us</Typography>
      </div>
      <div className='flex h-[462px] justify-center '>
        <div className=" w-[36%]  flex  justify-end items-end z-4 ">
          <img src={image2} alt="About Us" className=" h-full w-full object-cover justify-end items-end" />
        </div > 
        
        <div className='w-[40%] h-[692px] px-9  z-2  mt-6  -ml-[6vw] '>
        <Paper elevation={2} sx={{paddingX:7, paddingY:2}}>
          <Typography variant="h5" color='#AD9271' >Welcome To DICS</Typography>
          <Typography
      variant="body2"
      sx={{
        lineHeight: '1.8', // Adjust line height as needed
        fontSize: '1vw', // Adjust font size as needed
        wordSpacing: '0.13em',
        marginTop:'2.4rem' // Adjust word spacing as needed
      }}
      className="text-gray-800" // You can add any additional Tailwind CSS classes here
    >
      <span className='text-3xl'>T</span>he Raj Bhawan as the name signifies is the amalgamation of elegance with royal class. Incorporated by Mr. Rohit Roy, it is the best interior designer company which offers one stop solution to all the infrastructural and designing problems.

      The main agenda of the company is to bring creativity in their construction and architectural services in addition to the sturdiness and heftiness to the infrastructure. Starting from the contriving, to the architectonics to the interiors, the company under the governmentship of Mr. Roy is managed and run by a team of highly qualified and experienced professionals who work round the clock to make your dream turn into reality. They strive to maintain superior quality construction, timely delivery with full satisfaction of the customer.
    </Typography>
          </Paper>
        </div>
       
      </div>
    </div>
  );
}

export default About;

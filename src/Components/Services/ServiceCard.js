import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ServiceCard = ({ image, title, description }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 320, 
        maxHeight :350,
        paddingX: 2,
        paddingY:2, 
       
        fontFamily: 'Poppins, sans-serif',
        fontSize: '1vw',
        lineHeight: '1vw',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translate(4px, 4px)',
          boxShadow: '0 12px 28px rgba(0, 0, 0, 0.3)',
        },
        cursor: 'pointer',
      }}
    >
      <CardMedia
        sx={{ height: 150  }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h7" 
          component="div"
          sx={{ 
            fontFamily: 'Poppins, sans-serif', 
            fontWeight: 600 
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="subtitle2" 
          color="#3C4448"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1vw',
            lineHeight: '2vw',
            fontWeight: 450,
            marginTop: 2,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;

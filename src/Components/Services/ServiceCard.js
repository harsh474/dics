import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ServiceCard = ({ image, title, description }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 420, 
        height: 500, 
        paddingX: 4, 
        paddingY: 4,
        fontFamily: 'Poppins, sans-serif',
        fontSize: '8px',
        lineHeight: '20px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translate(4px, 4px)',
          boxShadow: '0 12px 28px rgba(0, 0, 0, 0.3)',
        },
        cursor: 'pointer',
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h5" 
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
            fontSize: '12px',
            lineHeight: '26px',
            fontWeight: 450,
            marginTop: 6,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;

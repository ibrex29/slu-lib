import React from 'react';
import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface StarRatingProps {
  rating: number; // Rating out of 5
}

const getStarColor = (index: number, rating: number): string => {
  // Define the color based on the rating
  if (index < rating) {
    return 'gold'; // Filled star color
  }
  return 'lightgrey'; // Unfilled star color
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {Array.from({ length: totalStars }, (_, index) => (
        <Box key={index}>
          {index < rating ? (
            <StarIcon sx={{ color: getStarColor(index, rating) }} />
          ) : (
            <StarBorderIcon sx={{ color: getStarColor(index, rating) }} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default StarRating;

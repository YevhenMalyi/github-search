import { useState } from 'react';
import { Rating } from '@mui/material';

interface ICustomRatingProps {
  rating: number | null, 
  setRating: (value: number | null) => void,
};

export const CustomRating = (
  { rating, setRating }: ICustomRatingProps
) => {
  return (
    <Rating
      value={rating}
      onChange={(event, newValue) => {
        setRating(newValue);
      }}
    />
  );
};
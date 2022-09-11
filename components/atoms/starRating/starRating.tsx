import React, { FC } from 'react';
import { Rating } from '@components/models/hotel';

type StarRatingProps = {
  rating: Rating;
};

export const StarRating: FC<StarRatingProps> = ({rating}) => {
  return <>Star rating {rating.ratingValue}</>;
};

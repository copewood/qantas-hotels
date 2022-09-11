import React, { FC } from 'react';
import { Rating } from '@components/models/hotel';
import { StyledRatingContainer } from './starRating.styles';

type StarRatingProps = {
  rating: Rating;
};

export const StarRating: FC<StarRatingProps> = ({rating}) => {
  return <>
    <StyledRatingContainer>
        {`Star rating ${rating.ratingValue}`}
    </StyledRatingContainer>
  </>;
};

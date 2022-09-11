import React, { FC } from 'react';

import { HotelImage } from 'components/atoms/hotelImage/hotelImage';
import { StarRating } from 'components/atoms/starRating/starRating';

import { StyledCardContainer } from './hotelCard.styles';
import { Hotel } from '../../models/hotel';

type HotelCardProps = {
  hotel: Hotel;
};

export const HotelCard: FC<HotelCardProps> = ({hotel}) => {
  const { property } = hotel;
  return <>
    <StyledCardContainer>
        <HotelImage previewImage={property.previewImage}/>
        <StarRating rating={property.rating}/>
    </StyledCardContainer>
  </>;
};

import React, { FC } from 'react';

import { HotelImage } from 'components/atoms/hotelImage/hotelImage';
import { StarRating } from 'components/atoms/starRating/starRating';

import { CardContainer } from './hotelCard.styles';
import { Hotel } from '../../models/hotel';

type HotelCardProps = {
  hotel: Hotel;
};

export const HotelCard: FC<HotelCardProps> = ({hotel}) => {
  return <>
    <CardContainer>
        <HotelImage/>
        <StarRating/>
    </CardContainer>
  </>;
};

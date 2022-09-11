import React, { FC } from 'react';

import { HotelImage } from 'components/atoms/hotelImage/hotelImage';
import { StarRating } from 'components/atoms/starRating/starRating';

import { 
  StyledCardContainer,
  StyledHotelInfo,
  StyledPricingInfo,
  StyledPropertyName,
  StyledPropertyAddress
} from './hotelCard.styles';
import { CANCELLATION_OPTION, Hotel } from '../../models/hotel';
import { off } from 'process';

type HotelCardProps = {
  hotel: Hotel;
};

export const HotelCard: FC<HotelCardProps> = ({hotel}) => {
  const { property, offer } = hotel;
  return <>
    <StyledCardContainer>
      <HotelImage previewImage={property.previewImage}/>
      <StyledHotelInfo>
        <StyledPropertyName>
          <span>{property.title}</span>
          <StarRating rating={property.rating}/>
        </StyledPropertyName>
        <StyledPropertyAddress>
          {property.address}
        </StyledPropertyAddress>
        <div>
          {offer.name}
        </div>
        <div>
          {offer.cancellationOption.cancellationType === CANCELLATION_OPTION.FREE_CANCELLATION && 
            <span>Free Cancellation</span>}
        </div>     
      </StyledHotelInfo>
      <StyledPricingInfo>
        <div>1 night total (AUD)</div>
        <div>${offer.displayPrice.amount}</div>
      </StyledPricingInfo>
    </StyledCardContainer>
  </>;
};

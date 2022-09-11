import React, { FC } from 'react';

import { HotelImage } from '../../../components/atoms/hotelImage/hotelImage';
import { StarRating } from '../../../components/atoms/starRating/starRating';

import { 
  StyledCardContainer,
  StyledHotelInfo,
  StyledPricingInfo,
  StyledPropertyName,
  StyledPropertyAddress,
  StyledOffer,
  StyledCancellation,
  StyledPrice,
  StyledSaving
} from './hotelCard.styles';
import { CANCELLATION_OPTION, Hotel } from '../../models/hotel';

type HotelCardProps = {
  hotel: Hotel;
};

export const HotelCard: FC<HotelCardProps> = ({hotel}) => {
  const { property, offer } = hotel;
  return <>
    <StyledCardContainer>
      <HotelImage previewImage={property.previewImage} offer={offer}/>
      <StyledHotelInfo>
        <StyledPropertyName>
          <span>{property.title}</span>
          <StarRating rating={property.rating}/>
        </StyledPropertyName>
        <StyledPropertyAddress>
          {property.address.map((address: string, index: number) => 
            <span key={`${hotel.id}-${index}`}>{address}</span>)
          }
        </StyledPropertyAddress>
        <StyledOffer href="/">
          {offer.name}
        </StyledOffer>
        <StyledCancellation>
          {offer.cancellationOption.cancellationType === CANCELLATION_OPTION.FREE_CANCELLATION && 
            <span>Free Cancellation</span>}
        </StyledCancellation>     
      </StyledHotelInfo>
      <StyledPricingInfo>
        <div>1 night total (AUD)</div>
        <StyledPrice>
          ${offer.displayPrice.amount}
        </StyledPrice>
        {offer.savings && offer.savings.amount && 
          <StyledSaving>
            Save ${offer.savings.amount}
          </StyledSaving>}
      </StyledPricingInfo>
    </StyledCardContainer>
  </>;
};

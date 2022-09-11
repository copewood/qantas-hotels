import { Offer, PreviewImage } from '@components/models/hotel';
import React, { FC } from 'react';
import { 
  StyledImageContainer,
  StyledImage,
  StyledText
} from './hotelImage.styles';

type HotelImageProps = {
   previewImage: PreviewImage;
   offer: Offer;
};

export const HotelImage: FC<HotelImageProps> = ({previewImage, offer}) => {
  return <>
    <StyledImageContainer>
      <StyledImage src={previewImage.url} />
      <StyledText>{offer && offer.promotion.title}</StyledText>
    </StyledImageContainer>
  </>;
};

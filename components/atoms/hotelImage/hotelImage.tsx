import { PreviewImage } from '@components/models/hotel';
import React, { FC } from 'react';
import { 
  StyledImageContainer,
  StyledImage
} from './hotelImage.styles';

type HotelImageProps = {
   previewImage: PreviewImage;
};

export const HotelImage: FC<HotelImageProps> = ({previewImage}) => {
  return <>
    <StyledImageContainer>
      <StyledImage src={previewImage.url} />
    </StyledImageContainer>
  </>;
};

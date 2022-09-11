import { PreviewImage } from '@components/models/hotel';
import React, { FC } from 'react';
import { StyledImageContainer } from './hotelImage.styles';

type HotelImageProps = {
   previewImage: PreviewImage;
};

export const HotelImage: FC<HotelImageProps> = ({previewImage}) => {
  return <>
    <StyledImageContainer>
      Hotel image {previewImage.url}
    </StyledImageContainer>
  </>;
};

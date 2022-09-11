import { PreviewImage } from '@components/models/hotel';
import React, { FC } from 'react';

type HotelImageProps = {
   previewImage: PreviewImage;
};

export const HotelImage: FC<HotelImageProps> = ({previewImage}) => {
  return <>Hotel image {previewImage.url}</>;
};

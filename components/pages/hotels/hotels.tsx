import React, { FC } from 'react';

import { HotelListHeader } from 'components/features/hotelListHeader/hotelListHeader';
import { HotelList } from 'components/features/hotelList/hotelList';

type HotelsProps = {};

export const Hotels: FC<HotelsProps> = ({}) => {
  return <>
    <HotelListHeader/>
    <HotelList/> 
  </>;
};

import React, { FC } from 'react';

import { HotelCard } from '@components/features/hotelCard/hotelCard';
import { ListContainer } from './hotelList.styles';
import { Hotel } from '../../models/hotel';

type HotelListProps = {
   hotels: Array<Hotel>
};

export const HotelList: FC<HotelListProps> = ({hotels}) => {
  return <>
    <ListContainer>
      {hotels.map((hotel: Hotel) => {
       return <HotelCard hotel={hotel}/>
      })}
    </ListContainer>
  </>;
};

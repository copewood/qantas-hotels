import React, { FC } from 'react';

import { HotelCard } from '../../../components/features/hotelCard/hotelCard';
import { StyledListContainer } from './hotelList.styles';
import { Hotel } from '../../models/hotel';

type HotelListProps = {
   hotels: Array<Hotel>
   sortOrder: string;
};

export const HotelList: FC<HotelListProps> = ({hotels, sortOrder}) => {
  // TODO sort the list
  return <>
    <StyledListContainer>
      {hotels.map((hotel: Hotel, index: number) => {
        return <HotelCard key={`hotel-${index}`} hotel={hotel}/>
      })}
    </StyledListContainer>
  </>;
};

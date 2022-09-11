import React, { FC } from 'react';
import { Hotel } from '@components/models/hotel';

import { StyledHeaderContainer } from './hotelListHeader.styles';

type HotelListHeaderProps = {
  hotels: Array<Hotel>
};

export const HotelListHeader: FC<HotelListHeaderProps> = ({hotels}) => {
  return <>
    <StyledHeaderContainer>
      Hotel list header = {hotels.length}
    </StyledHeaderContainer>
  </>;
};

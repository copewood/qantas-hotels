import React, { FC } from 'react';
import { Hotel } from '@components/models/hotel';

import { 
  StyledHeaderContainer, 
  StyledImageContainer,
  StyledSelect
} from './hotelListHeader.styles';

type HotelListHeaderProps = {
  hotels: Array<Hotel>
};

export const HotelListHeader: FC<HotelListHeaderProps> = ({hotels}) => {
  return <>
    <StyledImageContainer src="/qantas-logo.png" />

    <StyledHeaderContainer>
      <div>
        {hotels.length} hotels in Sydney
      </div>
      <div>
        Sort by
        <StyledSelect name="sort" id="sort">
          <option value="desc">Price high-low</option>
          <option value="asc">Price low-high</option>
        </StyledSelect>
      </div>
    </StyledHeaderContainer>
  </>;
};

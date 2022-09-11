import React, { FC } from 'react';

import { HeaderContainer } from './hotelListHeader.styles';

type HotelListHeaderProps = {};

export const HotelListHeader: FC<HotelListHeaderProps> = ({}) => {
  return <>
    <HeaderContainer>
      Hotel list header
    </HeaderContainer>
  </>;
};

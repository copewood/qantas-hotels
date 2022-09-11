import React, { FC, useEffect, useState} from 'react';

import { HotelListHeader } from 'components/features/hotelListHeader/hotelListHeader';
import { HotelList } from 'components/features/hotelList/hotelList';
import { Hotel } from '@components/models/hotel';

type HotelsProps = {};

const fetchHotels = async () => {
    return fetch('/api/hotels')
        .then((response) => response.json())
        .then((responseJson) => responseJson);
}

export const Hotels: FC<HotelsProps> = ({}) => {
  const [hotels, setHotels] = useState<Array<Hotel>>();

  useEffect(() => {
    fetchHotels().then((response)=>{
      setHotels(response.results as Array<Hotel>)
    });
  },[])
  
  return <>
    {hotels && <>
      <HotelListHeader hotels={hotels}/>
      {/* <HotelList hotels={hotels}/> */}
    </>}
  </>;
};

import React from 'react';
import { render } from '@testing-library/react';
import { HotelImage } from './hotelImage';
import { mockHotels } from '../../../pages/api/hotels'

describe('HotelList', () => {

  it('should show HotelImage', () => {
    const { container } = render(<HotelImage previewImage={mockHotels.results[0].property.previewImage}/>);
    expect(container).toMatchSnapshot()
  });
});

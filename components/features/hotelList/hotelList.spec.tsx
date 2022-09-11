import React from 'react';
import { render } from '@testing-library/react';
import { HotelList } from './hotelList';
import { mockHotels } from '../../../pages/api/hotels';

describe('HotelList', () => {
  it('should show HotelList', () => {
    const { container } = render(<HotelList hotels={mockHotels.results}/>);
    expect(container).toMatchSnapshot()
  });
});

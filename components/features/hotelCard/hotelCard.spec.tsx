import React from 'react';
import { render } from '@testing-library/react';
import { HotelCard } from './hotelCard';
import { mockHotels } from '../../../pages/api/hotels'

describe('HotelList', () => {
  it('should show HotelCard', () => {
    const { container } = render(<HotelCard hotel={mockHotels.results[0]}/>);
    expect(container).toMatchSnapshot()
  });
});

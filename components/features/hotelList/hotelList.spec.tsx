import React from 'react';
import { render, screen } from '@testing-library/react';
import { HotelList } from './hotelList';
import { mockHotels } from 'pages/api/hotels';

describe('HotelList', () => {
  beforeEach(() => {
    render(<HotelList hotels={mockHotels.results}/>);
  });
  it('should show HotelList', () => {
    expect(screen.getByText('Hotel list')).toBeTruthy();
  });
});

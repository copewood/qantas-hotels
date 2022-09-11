import React from 'react';
import { render, screen } from '@testing-library/react';
import { HotelListHeader } from './hotelListHeader';
import { mockHotels } from 'pages/api/hotels'

describe('HotelList', () => {
  beforeEach(() => {
    render(<HotelListHeader hotels={mockHotels.results} />);
  });
  it('should show HotelList', () => {
    expect(screen.getByText('Hotel list header')).toBeTruthy();
  });
});

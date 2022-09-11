import React from 'react';
import { render, screen } from '@testing-library/react';
import { HotelCard } from './hotelCard';
import { mockHotels } from 'pages/api/hotels'

describe('HotelList', () => {
  beforeEach(() => {
    render(<HotelCard hotel={mockHotels.results[0]}/>);
  });
  it('should show HotelCard', () => {
    expect(screen.getByText('Hotel card')).toBeTruthy();
  });
});

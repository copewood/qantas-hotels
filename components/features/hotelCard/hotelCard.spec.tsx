import React from 'react';
import { render, screen } from '@testing-library/react';
import { HotelCard } from './hotelCard';

describe('HotelList', () => {
  beforeEach(() => {
    render(<HotelCard />);
  });
  it('should show HotelCard', () => {
    expect(screen.getByText('Hotel card')).toBeTruthy();
  });
});

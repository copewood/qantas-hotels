import React from 'react';
import { render, screen } from '@testing-library/react';
import { HotelImage } from './hotelImage';

describe('HotelList', () => {
  beforeEach(() => {
    render(<HotelImage />);
  });
  it('should show HotelImage', () => {
    expect(screen.getByText('Hotel image')).toBeTruthy();
  });
});

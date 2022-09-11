import React from 'react';
import { render, screen } from '@testing-library/react';
import { HotelList } from './hotelList';

describe('HotelList', () => {
  beforeEach(() => {
    render(<HotelList />);
  });
  it('should show HotelList', () => {
    expect(screen.getByText('Hotel list')).toBeTruthy();
  });
});

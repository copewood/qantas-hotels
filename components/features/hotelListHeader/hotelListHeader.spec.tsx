import React from 'react';
import { render, screen } from '@testing-library/react';
import { HotelListHeader } from './hotelListHeader';

describe('HotelList', () => {
  beforeEach(() => {
    render(<HotelListHeader />);
  });
  it('should show HotelList', () => {
    expect(screen.getByText('Hotel list header')).toBeTruthy();
  });
});

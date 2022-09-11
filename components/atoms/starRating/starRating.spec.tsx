import React from 'react';
import { render, screen } from '@testing-library/react';
import { StarRating } from './starRating';

describe('HotelList', () => {
  beforeEach(() => {
    render(<StarRating />);
  });
  it('should show StarRating', () => {
    expect(screen.getByText('Star rating')).toBeTruthy();
  });
});

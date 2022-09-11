import React from 'react';
import { render, screen } from '@testing-library/react';
import { StarRating } from './starRating';

import { mockHotels } from 'pages/api/hotels';

describe('HotelList', () => {
  beforeEach(() => {
    render(<StarRating rating={mockHotels.results[0].property.rating}/>);
  });
  it('should show StarRating', () => {
    expect(screen.getByText('Star rating')).toBeTruthy();
  });
});

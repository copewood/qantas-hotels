import React from 'react';
import { render } from '@testing-library/react';
import { StarRating } from './starRating';

import { mockHotels } from '../../../pages/api/hotels';

describe('HotelList', () => {
  it('should show StarRating', () => {
    const { container } = render(<StarRating rating={mockHotels.results[0].property.rating}/>);
    expect(container).toMatchSnapshot()
  });
});

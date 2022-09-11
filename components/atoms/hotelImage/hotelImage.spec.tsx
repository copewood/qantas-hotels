import React from 'react';
import { render, screen } from '@testing-library/react';
import { HotelImage } from './hotelImage';
import { mockHotels } from 'pages/api/hotels'

describe('HotelList', () => {
  beforeEach(() => {
    render(<HotelImage previewImage={mockHotels.results[0].property.previewImage}/>);
  });
  it('should show HotelImage', () => {
    expect(screen.getByText('Hotel image')).toBeTruthy();
  });
});

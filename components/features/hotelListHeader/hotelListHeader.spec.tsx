import React from 'react';
import { render } from '@testing-library/react';
import { HotelListHeader } from './hotelListHeader';
import { mockHotels } from '../../../pages/api/hotels'

const mockSetSortOrder = jest.fn();

describe('HotelList', () => {
  it('should show HotelList', () => {
    const { container } = render(<HotelListHeader hotels={mockHotels.results} setSortOrder={mockSetSortOrder} />);
    expect(container).toMatchSnapshot()
  });
});

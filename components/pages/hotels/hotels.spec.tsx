import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hotels } from './hotels';

describe('HotelList', () => {
  beforeEach(() => {
    render(<Hotels />);
  });
  it('should show Hotels', () => {
    expect(screen.getByText('Hotels')).toBeTruthy();
  });
});

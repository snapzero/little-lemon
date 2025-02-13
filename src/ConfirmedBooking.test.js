import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmedBooking from './components/ConfirmedBooking';

jest.mock('./components/Button', () => {
  const text = '';
  const variant = '';
  const route = ''
  return ({route, text, variant}) => (<mock-button data-testid="mock-button" route={route} text={text} variant={variant} />)
});

test('Renders call to action button and confirmed text', () => {
  render(<ConfirmedBooking />);

  const button = screen.getByTestId('mock-button');
  const bttnTextValue = button.getAttribute('text');
  const bttnRouteValue = button.getAttribute('route');
  expect(bttnTextValue).toBe('View our menu');
  expect(bttnRouteValue).toBe('/');
  expect(button).toBeInTheDocument();

  const heading = screen.getByRole('heading');
  expect(heading.textContent).toBe('Confirmed');

  const pText = screen.getByRole('paragraph');
  expect(pText.textContent).toBe('Your reservation has been made.');
});

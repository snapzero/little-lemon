import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingPage from './pages/BookingPage';

const mockUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
   ...jest.requireActual('react-router'),
  useNavigate: () => mockUsedNavigate,
}));

jest.mock('./components/BookingForm', () => {
  const timeOptions = ['1', '2'];
  const dispatch = jest.fn();
  return ({timeOptions, dispatch}) => (<mock-booking-form data-testid="mb-form" timeOptions={timeOptions} dispatch={dispatch} />)
});

const fetchAPI = jest.fn();
window.fetchAPI = fetchAPI;

test('Renders the BookingPage heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();
});

test('BookingPage renders the BookingForm', () => {
  render(<BookingPage />);
  const bookingFormElement = screen.getByTestId('mb-form');
  expect(bookingFormElement).toBeInTheDocument();
});

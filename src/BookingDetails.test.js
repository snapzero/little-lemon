import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingDetails from './components/BookingDetails';

const mockUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
   ...jest.requireActual('react-router'),
  useNavigate: () => mockUsedNavigate,
}));

const mockLocalStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
    removeItem: jest.fn(),
    length: 0,
    key: jest.fn(),
};

const submitAPI = jest.fn();
window.submitAPI = submitAPI;

beforeEach(() => {
    global.localStorage = mockLocalStorage;
    jest.clearAllMocks();
});

afterEach(() => {
    delete global.localStorage;
});

test('Renders the reservation deatils', async () => {
  jest.spyOn(React, 'useState')
    .mockReturnValueOnce([false, jest.fn()])
    .mockReturnValueOnce([{
      "date":"2025-02-28",
      "time":"21:30",
      "guests":"2",
      "occassion":"Anniversary"
  }, jest.fn()]);

  render(<BookingDetails />);

  expect(screen.getByText('Friday, February 28, 2025')).toBeInTheDocument();
  expect(screen.getByText('21:30 PM')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('Anniversary')).toBeInTheDocument();
});

test('Go back button navigates to Form path', async () => {
    jest.spyOn(React, 'useState')
    .mockReturnValueOnce([false, jest.fn()])
    .mockReturnValueOnce([{
      "date":"2025-02-28",
      "time":"21:30",
      "guests":"2",
      "occassion":"Anniversary"
  }, jest.fn()]);

  render(<BookingDetails />);

  const buttons = screen.getAllByRole('button');
  fireEvent.click(buttons[0]);

  expect(mockUsedNavigate).toHaveBeenCalledWith('/reservations');
});

test('Confirm button', async () => {
    const setIsLoading = jest.spyOn(React, 'useState');
    jest.spyOn(React, 'useState')
      .mockReturnValueOnce([false, jest.fn()])
      .mockReturnValueOnce([{
        "date":"2025-02-28",
        "time":"21:30",
        "guests":"2",
        "occassion":"Anniversary"
    }, jest.fn()]);

    render(<BookingDetails />);

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]);

    expect(setIsLoading).toHaveBeenCalledWith(true);
    expect(submitAPI).toHaveBeenCalled();
    expect(mockUsedNavigate).toHaveBeenCalledWith('/reservation-confirmed');
  });


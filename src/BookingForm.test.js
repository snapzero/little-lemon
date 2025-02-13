import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './components/BookingForm';

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

const timeOptions = ['5:00', '6:00', '7:00', '8:00'];
const dispatch = jest.fn();
const handleSubmit = jest.fn();

beforeEach(() => {
    global.localStorage = mockLocalStorage;
    jest.clearAllMocks();
});

afterEach(() => {
    delete global.localStorage;
});


test('it renders the form fields', () => {
  render(<BookingForm timeOptions={timeOptions} dispatch={dispatch} />);

  const dateInput = screen.getByLabelText('Choose date', {exact: false});
  const guestsInput = screen.getByRole('spinbutton');
  const selectInputs = screen.getAllByRole('combobox');
  const button = screen.getByRole('button');

  expect(dateInput).toBeInTheDocument();
  expect(guestsInput).toBeInTheDocument();
  expect(selectInputs.length).toEqual(2);
  expect(button).toBeInTheDocument();
});

test('displays error message if date is not entered on submit', () => {
    const handleSubmit = jest.fn();

    render(<BookingForm timeOptions={timeOptions} dispatch={dispatch} onSubmit={handleSubmit} />);

    const button = screen.getByRole('button');
    fireEvent.submit(button);

    const errorMessage = screen.getByText('Date is required');
    expect(errorMessage).toBeInTheDocument();
});

test('displays error message if date input has no value on blur', () => {
  render(<BookingForm timeOptions={timeOptions} dispatch={dispatch} />);
  const dateInput = screen.getByLabelText('Choose date', {exact: false});

  fireEvent.focus(dateInput);
  fireEvent.blur(dateInput);

  const errorMessage = screen.getByText('Date is required');
  expect(errorMessage).toBeInTheDocument();
});

test('form fields update correctly', () => {
  render(<BookingForm timeOptions={timeOptions} dispatch={dispatch} />);
  const dateInput = screen.getByLabelText('Choose date', {exact: false});
  const selectInputs = screen.getAllByRole('combobox');;
  const guestsInput = screen.getByRole('spinbutton');
  const occassionInput = screen.getByLabelText('Occassion');

  expect(dateInput.value).toBe('');
  expect(selectInputs[0].value).toBe('5:00');
  expect(guestsInput.value).toBe('1');
  expect(occassionInput.value).toBe('No occassion');

  fireEvent.change(dateInput, { target: { value: '2026-02-28' } });
  fireEvent.change(selectInputs[0], { target: { value: '8:00' } });
  fireEvent.change(guestsInput, { target: { value: '4' } });
  fireEvent.change(occassionInput, { target: { value: 'Birthday' } });

  expect(dateInput.value).toBe('2026-02-28');
  expect(selectInputs[0].value).toBe('8:00');
  expect(guestsInput.value).toBe('4');
  expect(occassionInput.value).toBe('Birthday');
});

test('it dispatches date to parent on date change', () => {
    render(<BookingForm timeOptions={timeOptions} dispatch={dispatch} />);

    const dateInput = screen.getByLabelText('Choose date', {exact: false});
    const selectOptions = screen.getAllByRole('option');

    fireEvent.change(dateInput, { target: { value: '2026-02-28' } });

    expect(dateInput.value).toBe('2026-02-28');
    expect(dispatch).toHaveBeenCalledWith({"date": "2026-02-28"});
});


it('should render data from local storage', async () => {
    mockLocalStorage.getItem.mockReturnValue(JSON.stringify({
        "date":"2025-02-27",
        "time":"21:30",
        "guests":"2",
        "occassion":"Anniversary"
    }));

    render(<BookingForm timeOptions={timeOptions} dispatch={dispatch} />);

    const dateInput = screen.getByLabelText('Choose date', {exact: false});
    const guestsInput = screen.getByRole('spinbutton');
    const occassionInput = screen.getByLabelText('Occassion');

    await waitFor(() => {
      expect(mockLocalStorage.getItem).toHaveBeenCalledTimes(1);
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('formData');
    });

    expect(dateInput.value).toBe('2025-02-27');
    expect(guestsInput.value).toBe('2');
    expect(occassionInput.value).toBe('Anniversary');
});

test('it should submit the form', () => {
    const data = {
        "date":"2026-02-28",
        "time":"5:00",
        "guests":1,
        "occassion":"No occassion"
    }

    render(<BookingForm timeOptions={timeOptions} dispatch={dispatch} onSubmit={handleSubmit} />);

    const dateInput = screen.getByLabelText('Choose date', {exact: false});
    fireEvent.change(dateInput, { target: { value: '2026-02-28' } });
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('formData', JSON.stringify(data));
    expect(mockUsedNavigate).toHaveBeenCalledWith('/reservation-details');
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './components/Button';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    Link: ({ children, to}) =>  {
        return (<mock-link data-testid="link" href={to}>{[children]}</mock-link>);
    },
}));

const route = "/route";
const variant = "secondary";
const text = "Some text";
const type = "submit";
const handleClick = jest.fn();

test('it renders a link element', () => {
  render(<Button route={route} text={text} variant={variant} />);

  const link = screen.getByTestId('link');
  const linkRouteValue = link.getAttribute('href');
  expect(link.textContent).toBe('Some text');
  expect(linkRouteValue).toBe('/route');
  expect(link).toBeInTheDocument();
});

test('it renders a button element', () => {
    render(<Button type={type} text={text} variant={variant} />);

    const bttn = screen.getByRole('button');
    const bttnTypeValue = bttn.getAttribute('type');
    expect(bttn.textContent).toBe('Some text');
    expect(bttnTypeValue).toBe('submit');
    expect(bttn).toBeInTheDocument();
  });
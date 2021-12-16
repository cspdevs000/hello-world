import { render, screen } from '@testing-library/react';
import App from './App';
import Forum from './Forum';

// vv default test for react template vv
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('renders Dashboard tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Dashboard/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Customers tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Customers/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Authentication tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Authentication/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Payments tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Payments/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Transfers tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Transfers/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Balance tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Balance/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Question tag', () => {
  render(<Forum />);
  const spanElement = screen.getByTitle(/Question/i);
  expect(spanElement).toBeInTheDocument();
});
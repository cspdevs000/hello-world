import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('renders span tag', () => {
  render(<Hero />);
  const spanElement = screen.getByText(/Tristique senectus et netus et./i);
  expect(spanElement).toBeInTheDocument();
});

test('renders span tag', () => {
    render(<Hero />);
    const spanElement = screen.getByText(/Box is in the middle/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders span tag', () => {
    render(<Hero />);
    const spanElement = screen.getByText(/Modular Modern free/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders span tag', () => {
    render(<Hero />);
    const spanElement = screen.getByText(/Aisia caisia/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders span tag', () => {
    render(<Hero />);
    const spanElement = screen.getByText(/Home/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders span tag', () => {
    render(<Hero />);
    const spanElement = screen.getByText(/Features/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders span tag', () => {
    render(<Hero />);
    const spanElement = screen.getByText(/Better Angels/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders span tag', () => {
    render(<Hero />);
    const spanElement = screen.getByText(/Future Shock/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders span tag', () => {
    render(<Hero />);
    const spanElement = screen.getByText(/Ironing Man/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders span tag', () => {
    render(<Hero />);
    const spanElement = screen.getByText(/Examples/i);
    expect(spanElement).toBeInTheDocument();
});



//Ask about later
// test('renders Column tag', () => {
//     render(<Hero />);
//     const spanElement = screen.getAllByText(/column/i);
//     expect(spanElement).toBeInTheDocument();
// });
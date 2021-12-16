import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('renders p tag', () => {
    render(<Hero />);
    const pElement = screen.getByText(/Spiderman/i);
    expect(pElement).toBeInTheDocument();
  });

test('renders p tag', () => {
    render(<Hero />);
    const pElement = screen.getByText(/Bottom Box/i);
    expect(pElement).toBeInTheDocument();
});

// test('renders p tag', () => {
//     render(<Hero />);
//     const pElement = screen.getAllByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis./i);
//     expect(pElement).toBeInTheDocument();
// });


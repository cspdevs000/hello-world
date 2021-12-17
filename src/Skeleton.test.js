import { render, screen } from '@testing-library/react';
import Skeleton from './Skeleton';

test('renders p tag', () => {
  render(<Skeleton />);
  const pElement = screen.getByText(/Start here.../i);
  expect(pElement).toBeInTheDocument();
});
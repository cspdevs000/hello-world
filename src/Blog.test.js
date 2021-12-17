import { render, screen } from '@testing-library/react';
import Blog from './Blog';

test('renders span tag', () => {
  render(<Blog />);
  const spanElement = screen.getByText(/May 10, 2018/i);
  expect(spanElement).toBeInTheDocument();
});
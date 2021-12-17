import { render, screen } from '@testing-library/react';
import Landing from './Landing';

test('renders span tag', () => {
  render(<Landing />);
  const spanElement = screen.getByText(/Home/i);
  expect(spanElement).toBeInTheDocument();
});
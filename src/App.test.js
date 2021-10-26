import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lets choose a workout!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Let's choose a workout!/i);
  expect(linkElement).toBeInTheDocument();
});

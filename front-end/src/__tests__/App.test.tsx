import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders Main App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Aldi Alhafidzi/i);
  expect(linkElement).toBeInTheDocument();
});

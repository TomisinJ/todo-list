import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
});

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getAllByRole("heading")).toHaveTextContent(/Task List/);
});
import { render } from '@testing-library/react';
import App from './App';

test('App title valid', () => {
  render(<App />);
  const appTitle = document.querySelector('header > h2');
  expect(appTitle).toHaveTextContent('casino');
});

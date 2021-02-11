import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

describe('App', () => {
  test('renders to the DOM', () => {
    render(<BrowserRouter><LandingPage /></BrowserRouter>);
  });
})

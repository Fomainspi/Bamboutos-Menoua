import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App navigation', () => {
  it('renders the homepage hero content', async () => {
    render(<App />);
    expect(
      await screen.findByRole('heading', { name: /bamboutos–menoua/i, level: 1 }),
    ).toBeInTheDocument();
  });

  it('navigates to the Bamboutos page via the header link', async () => {
    const user = userEvent.setup();
    render(<App />);
    const nav = await screen.findByRole('navigation', { name: /navigation principale/i });
    const link = within(nav).getByRole('link', { name: /^bamboutos$/i });
    await user.click(link);
    expect(
      await screen.findByRole('heading', { name: /^bamboutos$/i, level: 1 }),
    ).toBeInTheDocument();
  });

  it('shows a 404 page for unknown routes', async () => {
    window.history.pushState({}, '', '/this-route-does-not-exist');
    render(<App />);
    expect(await screen.findByText(/404/)).toBeInTheDocument();
  });
});

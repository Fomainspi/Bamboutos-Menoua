import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ContactPage } from '../pages/public/ContactPage';

describe('ContactPage form validation', () => {
  it('shows validation errors when submitting an empty form', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole('button', { name: /envoyer/i }));

    expect(await screen.findAllByRole('alert')).toHaveLength(3);
  });

  it('accepts a valid submission', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    await user.type(screen.getByLabelText(/nom complet/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/^email$/i), 'jane@example.org');
    await user.type(screen.getByLabelText(/message/i), 'Bonjour !');
    await user.click(screen.getByRole('button', { name: /envoyer/i }));

    expect(await screen.findByRole('status')).toBeInTheDocument();
  });
});

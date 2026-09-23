import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

jest.mock('react-tsparticles', () => () => <div data-testid="particles" />);
jest.mock('./components/ParticlesUtils', () => ({ particlesInit: jest.fn() }));

let media;
let motionListeners;
beforeEach(() => {
  motionListeners = new Set();
  media = {
    matches: false,
    addEventListener: jest.fn((event, listener) => motionListeners.add(listener)),
    removeEventListener: jest.fn((event, listener) => motionListeners.delete(listener)),
  };
  window.matchMedia = jest.fn(() => media);
});

test('renders the current role, working section anchors, and accessible profile links', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Konstantin Hemker' })).toBeInTheDocument();
  expect(screen.getByText('Life Sciences at OpenAI')).toBeInTheDocument();
  expect(screen.getByText(/I work on the Life Sciences team at OpenAI/)).toBeInTheDocument();
  for (const link of within(screen.getByRole('navigation')).getAllByRole('link')) {
    expect(document.querySelector(link.getAttribute('href'))).toBeInTheDocument();
  }
  expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main');
  expect(screen.getByRole('link', { name: /Google Scholar/ })).toHaveAttribute('href', expect.stringContaining('SJVH3nIAAAAJ'));
});

test('shows seven publications with external paper links and only verified code links', () => {
  render(<App />);
  const rows = screen.getAllByRole('article');
  expect(rows).toHaveLength(7);
  ['2602.14177', '2405.19950', '2502.17761'].forEach((id, index) => {
    expect(within(rows[index]).getByRole('link', { name: /^Paper:/ })).toHaveAttribute('href', `https://arxiv.org/abs/${id}`);
  });
  expect(within(rows[1]).getByText('ICLR 2025')).toBeInTheDocument();
  expect(within(rows[2]).queryByRole('link', { name: /^Code:/ })).not.toBeInTheDocument();
  expect(within(rows[3]).getByText('NeurIPS 2024')).toBeInTheDocument();
  expect(screen.getByText(/NeurIPS 2023 Workshop on Medical Imaging, for HEALNet/)).toBeInTheDocument();
  for (const row of rows) {
    expect(within(row).getByRole('img', { name: /^Overview figure/ })).toHaveAttribute('src');
    const paper = within(row).getByRole('link', { name: /^Paper:/ });
    expect(paper).toHaveAttribute('href', expect.stringMatching(/^https:\/\//));
    expect(within(row).getByRole('link', { name: /^Read / })).toHaveAttribute('href', paper.getAttribute('href'));
  }
});

test('makes the portrait toggle operable by keyboard', () => {
  render(<App />);
  const portrait = screen.getByRole('button', { name: 'Toggle pathology image' });
  portrait.focus();
  act(() => { userEvent.keyboard('{Enter}'); });
  expect(portrait).toHaveAttribute('aria-pressed', 'true');
  act(() => { userEvent.keyboard(' '); });
  expect(portrait).toHaveAttribute('aria-pressed', 'false');
});

test('disables animated particles for reduced motion and responds to preference changes', () => {
  media.matches = true;
  const { unmount } = render(<App />);
  expect(screen.queryByTestId('particles')).not.toBeInTheDocument();
  act(() => {
    media.matches = false;
    motionListeners.forEach(listener => listener());
  });
  expect(screen.getByTestId('particles')).toBeInTheDocument();
  act(() => {
    media.matches = true;
    motionListeners.forEach(listener => listener());
  });
  expect(screen.queryByTestId('particles')).not.toBeInTheDocument();
  unmount();
  expect(motionListeners.size).toBe(0);
});

import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import RenderDinosaur from './RenderDinosaur';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add Dilophosaurus/i);
  expect(linkElement).toBeInTheDocument();
});

test('RenderDinosaurs should display a spinosaurus when clicking Add Spinosaurus', () => {
  render(<App dinosaur='spinosaurus' />);
  const spinosaurusButtonEl = screen.getByTitle('spinosaurus-button-el');
  fireEvent.click(spinosaurusButtonEl);

  const linkElement = screen.getAllByAltText('spinosaurus');
  expect(linkElement.length).toBe(2);
});

test('clicking the sign should reveal an img with alt text Jurassic Park gates open', () => {
  render(<App />);
  const zooSignEl = screen.getByTitle('sign');
  fireEvent.click(zooSignEl);

  const linkElement = screen.getByAltText('Jurassic Park gates open');
  expect(linkElement).toBeInTheDocument();
});

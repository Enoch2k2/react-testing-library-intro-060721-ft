import { render, screen, fireEvent } from '@testing-library/react';
import IncrementButton from '../IncrementButton';

test('has a header of Increment The Counter', () => {
  render(<IncrementButton />);

  const header = screen.getByRole('heading', { name: 'Increment The Counter'});

  expect(header).toBeInTheDocument();
})

// describe('incrementor button', () => {
test('has a button with the name of Click Me!', () => {
  render(<IncrementButton />)

  const button = screen.getByRole('button', { name: 'Click Me!' });
  
  expect(button).toBeInTheDocument();
})
// })

test('has a counter that can increment', () => {
  render(<IncrementButton />);
  
  const button = screen.getByRole('button', { name: 'Click Me!' });
  const count = screen.getByText('0');

  // click the button
  fireEvent.click(button);
  // expect the count to be 1
  expect(count.textContent).toBe('1');
  // click the button again
  fireEvent.click(button);
  // expect the count to be 2
  expect(count.textContent).toBe('2');
})
import { Hello } from '../Hello';
import { render, fireEvent, screen } from '../index';

describe('Hello', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <Hello message="hello" onClick={() => {}} />
    );
    expect(getByTestId('message')).toHaveTextContent('hello');
  });
  it('should click', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(
      <Hello message="hello" onClick={mockOnClick} />
    );
    expect(screen.getByTestId('button')).toBeInTheDocument();
    fireEvent.click(getByTestId('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

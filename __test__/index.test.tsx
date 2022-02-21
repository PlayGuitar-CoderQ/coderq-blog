import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('render a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: '初始化标签',
    });

    expect(heading).toBeInTheDocument();
  });
});

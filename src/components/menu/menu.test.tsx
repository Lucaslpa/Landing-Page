import { render } from 'utils/test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { Menu } from './index';

describe.only('Menu', () => {
  it('Should  hidden navigator when in less 768px screen', () => {
    render(<Menu />);
    const navigator = screen.getByRole('navigation');
    expect(navigator).toHaveStyleRule('opacity', '0', {
      media: '(max-width: 768px)',
    });
    expect(navigator).toMatchSnapshot();
  });

  it('Should  show navigator when in less 768px and menu open was active', () => {
    render(<Menu />);
    const navigator = screen.getByRole('navigation');
    const openMenu = screen.getByLabelText(/Open And Close Menu/gi);
    expect(navigator).toHaveStyleRule('opacity', '0', {
      media: '(max-width: 768px)',
    });

    fireEvent.click(openMenu);

    expect(navigator).toHaveStyleRule('opacity', '1', {
      media: '(max-width: 768px)',
    });

    expect(navigator).toMatchSnapshot();
  });
});

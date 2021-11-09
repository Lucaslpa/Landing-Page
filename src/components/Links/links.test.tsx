import { render } from 'utils/test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { Links } from './index';

describe('Links', () => {
  it('Should render title', () => {
    render(<Links title="pastel" links={['link 1', 'link 2']} />);
    const title = screen.getByText(/pastel/gi);
    expect(title).toBeInTheDocument();
    expect(title).toMatchSnapshot();
  });

  it('Should render all links', () => {
    render(<Links title="pastel" links={['link 1', 'link 2']} />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(2);
    expect(links).toMatchSnapshot();
  });
});

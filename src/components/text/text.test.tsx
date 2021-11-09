import { render } from 'utils/test-utils';
import { screen } from '@testing-library/react';

import { Text } from './index';

describe('Text', () => {
  it('Should render topText', () => {
    render(<Text text="meme" title="meme" sizeMedium topText="TopText" />);
    const topText = screen.getByText(/TopText/gi);
    expect(topText).toBeInTheDocument();
  });

  it('Should match snapshots', () => {
    render(<Text text="meme" title="meme" topText="TopText" />);
    const container = screen.getByTestId(/container/gi);
    const heading = screen.getByRole('heading');
    const paragraph = screen.getByTestId(/paragraph/gi);

    expect(container).toMatchSnapshot();
    expect(heading).toMatchSnapshot();
    expect(paragraph).toMatchSnapshot();
  });

  it('Should match snapshots with sizeMedium', () => {
    render(<Text text="meme" title="meme" sizeMedium topText="TopText" />);
    const container = screen.getByTestId(/container/gi);
    const heading = screen.getByRole('heading');
    const paragraph = screen.getByTestId(/paragraph/gi);

    expect(container).toMatchSnapshot();
    expect(heading).toMatchSnapshot();
    expect(paragraph).toMatchSnapshot();
  });

  it('Should render Text with sizeMedium Styles', () => {
    render(<Text text="meme" title="meme" sizeMedium={true} />);

    const container = screen.getByTestId(/container/gi);
    const heading = screen.getByRole('heading');
    const paragraph = screen.getByTestId(/paragraph/gi);

    expect(container).toHaveStyleRule('max-width', '48.9rem', {
      media: '(min-width: 450px)',
    });
    expect(container).toHaveStyleRule('height', 'auto', {
      media: '(min-width: 450px)',
    });

    expect(heading).toHaveStyleRule('text-align', 'left', {
      media: '(min-width: 768px)',
    });

    expect(paragraph).toHaveStyleRule('line-height', '3rem', {
      media: '(min-width: 450px)',
    });
  });
});

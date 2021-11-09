import { render } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import { Button } from './index';

describe.only('Button', () => {
  it('Should render small button dark', () => {
    render(<Button size="small" colors="dark" label="button" />);
    const button = screen.getByLabelText(/button/gi);
    expect(button).toHaveStyleRule('color', '#FFFFFF');
    expect(button).toHaveStyleRule('background-color', '#252160');
    expect(button).toHaveStyleRule('fill', '#FFFFFF');
    expect(button).toHaveStyleRule('font-size', '1.5rem');
    expect(button).toHaveStyleRule('max-height', '4.3rem');
    expect(button).toHaveStyleRule('max-width', '13.3rem');
    expect(button).toMatchSnapshot();
  });

  it('Should render medium button dark', () => {
    render(<Button size="medium" colors="dark" label="button" />);
    const button = screen.getByLabelText(/button/gi);
    expect(button).toHaveStyleRule('color', '#FFFFFF');
    expect(button).toHaveStyleRule('background-color', '#252160');
    expect(button).toHaveStyleRule('fill', '#FFFFFF');
    expect(button).toHaveStyleRule('font-size', '1.7rem');
    expect(button).toHaveStyleRule('max-height', '6rem');
    expect(button).toHaveStyleRule('max-width', '20rem');

    expect(button).toMatchSnapshot();
  });

  it('Should render medium button ligh', () => {
    render(<Button size="medium" colors="light" label="button" />);
    const button = screen.getByLabelText(/button/gi);
    expect(button).toHaveStyleRule('color', '#252160');
    expect(button).toHaveStyleRule('background-color', '#3AFFE5');
    expect(button).toHaveStyleRule('fill', '#252160');
    expect(button).toHaveStyleRule('font-size', '1.7rem');
    expect(button).toHaveStyleRule('max-height', '6rem');
    expect(button).toHaveStyleRule('max-width', '20rem');
    expect(button).toMatchSnapshot();
  });

  it('Should render big button lightGradient', () => {
    render(<Button size="big" colors="lightGradient" label="button" />);
    const button = screen.getByLabelText(/button/gi);
    expect(button).toHaveStyleRule('color', '#FFFFFF');
    expect(button).toHaveStyleRule(
      'background',
      'linear-gradient(145.09deg,#26E9CF 11.81%,#25CDE1 95.89%)'
    );
    expect(button).toHaveStyleRule('fill', '#FFFFFF');
    expect(button).toHaveStyleRule('font-size', '1.7rem');
    expect(button).toHaveStyleRule('max-height', '6rem');
    expect(button).toHaveStyleRule('max-width', '31.3rem');

    expect(button).toMatchSnapshot();
  });
  it('Should render xBig button ', () => {
    render(<Button size="xBig" colors="lightGradient" label="button" />);
    const button = screen.getByLabelText(/button/gi);
    expect(button).toHaveStyleRule('font-size', '1.7rem');
    expect(button).toHaveStyleRule('max-height', '5.9rem');
    expect(button).toHaveStyleRule('max-width', '38rem');
    expect(button).toMatchSnapshot();
  });
  it('Should render button with arrow icon', () => {
    render(<Button size="small" colors="dark" label="button" ArrowRight />);
    const arrow = screen.getByLabelText(/arrow/gi);
    expect(arrow).toBeInTheDocument();
    expect(arrow).toMatchSnapshot();
  });
  it('Should render button without arrow icon', () => {
    render(<Button size="small" colors="dark" label="button" />);
    const arrow = screen.queryByLabelText(/arrow/gi);
    expect(arrow).not.toBeInTheDocument();
    expect(arrow).toMatchSnapshot();
  });
});

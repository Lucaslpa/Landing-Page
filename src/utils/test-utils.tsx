import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Theme } from '../style/theme';
import { ThemeProvider } from 'styled-components';

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

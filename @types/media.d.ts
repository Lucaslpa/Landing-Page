/* eslint-disable @typescript-eslint/no-empty-interface */
import { DefaultBreakpoints } from 'styled-media-query';

type CustomDefaultBreakpoints = { '1000px': string };

declare module 'styled-media-query' {
  export interface DefaultBreakpoints extends CustomDefaultBreakpoints {}
}

// deps
import 'styled-components';

declare module 'styled-components' {
  interface IPalette {
    main: string;
    contrastText: string;
  }

  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}

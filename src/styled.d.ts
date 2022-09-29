// deps
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    foreground: string;
    border: string;
    primary: string;
    secondary: string;
  }
}

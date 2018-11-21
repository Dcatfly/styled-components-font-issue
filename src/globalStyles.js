import { createGlobalStyle } from 'styled-components';

import assassin2 from './fonts/Assassin.woff2';
import assassin from './fonts/Assassin.woff';

// Having some issues with createGlobalStyle in styled-components v4 (https://github.com/styled-components/styled-components/issues/2227#issuecomment-440196657)
// Fallback to v3 injectGlobal for now. It seems to be working fine.
export default createGlobalStyle`
@font-face {
  font-family: "Assassin$";
  src: url(${assassin2}) format("woff2"), url(${assassin}) format("woff");
  font-weight: 400;
  font-style: normal;
}`;
import React from 'react';
import { H1, H3 } from './heading.style';

function Heading({ type, children }) {
  switch (type) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'h3':
      return <H3>{children}</H3>;
    default:
      break;
  }
}

export default Heading;

import React from 'react';

import { Container } from './styles';

function Load() {
  return (
    <Container>
      <div>
        <svg viewBox="25 25 50 50">
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="4"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </Container>
  );
}

export default Load;

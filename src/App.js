import React from 'react';
import Wrapper from './components/Wrapper/index';

import Styled from 'styled-components';

function App() {
  return (
    <Page>
      <Wrapper />
    </Page>
  );
}

const Page = Styled.div` 
  padding: 5px;
  margin-left: 350px;
`;

export default App;

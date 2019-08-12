import React from 'react';
import Menu from './components/Menu/index';
import Promotions from './components/Promotions/index';

import Styled from 'styled-components';

function App() {
  return (
    <Page>
      <Menu />
      <Promotions />
    </Page>
  );
}

const Page = Styled.div` 
  padding: 5px;
  margin-left: 350px;
`;

export default App;

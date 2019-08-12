import React, { Component } from 'react';
import Styled from 'styled-components';

class Menu extends Component {
  render() {
    return (
      <>
         <BtnA type='button'>All Promotions</BtnA>
         <BtnN type='button'>New Customers</BtnN>
      </>
    );
  }
}

const BtnA = Styled.button`
   width: 300px;
   padding: 4px;
   cursor: pointer;
   border: 1px solid #636e72;
   border-radius: 5px 0 0 5px;
   color: #636e72;
   background: #FFF;
   font-family: Arial;
`;
const BtnN = Styled.button`
   border-radius: 0 5px 5px 0;
   width: 300px;
   padding: 4px;
   cursor: pointer;
   border: 1px solid #636e72;
   color: #636e72;
   background: #FFF;
`;

export default Menu;
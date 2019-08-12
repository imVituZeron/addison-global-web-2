import React, { Component } from 'react';
import Styled from 'styled-components';

class Promotions extends Component {
   render() {
      return (
         <>
            <Promo>
               <h1>Promotions ten</h1>
               <p>Descriptions ola meus amigos da web teremos um site online na proxima semana</p>
               <button>btn 1</button>
               <button className='btn-join'>btn 2</button>
            </Promo>
         </>
      );
   }
}

const Promo = Styled.div`
   margin-top: 10px;
   padding: 10px;
   width: 600px;
   background: #dcdde1;
   font-family: Arial;

   h1{
      margin-left: 155px;
   }
   p{
      padding: 10px;
   }

   button{
      margin-left: 90px;
      width: 150px;
      padding: 4px;
      cursor: pointer;
      border: 1px solid #636e72;
      border-radius: 5px;
      color: #2d3436;
      background: #dcdde1;
   }
   button.btn-join{
      color: #FFF;
      background: #2d3436;
   }
`;

export default Promotions;

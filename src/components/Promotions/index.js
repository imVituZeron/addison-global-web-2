import React, { Component } from 'react';
import Styled from 'styled-components';
import api from '../../services/api';

class Promotions extends Component {

   state = {
      // promotions ta armazenando os dados da api
      promotions: [],
   }

   componentDidMount() {
      // serve para executar o metodo ou component assim que ele aparece
      this.loadApi();
   }

   loadApi = async () => {
      const response = await api.get('/');
      // o response ta recebendo o metodo get da api 
      this.setState({ promotions: response.data }); 
      // promotions recebendo os dados da response.date
   }

   render() {
      const { promotions }= this.state;
      return (
         <>
            { promotions.map((promo) => (
               <Promo> 
                  <h1 key={ promo._id}>{ promo.name }</h1>
                  <p>{ promo.description }</p>
                  <button>{ promo.termsAndConditionsButtonText }</button>
                  <button className='btn-join'>{ promo.joinNowButtonText }</button>
               </Promo>
            ))}
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

import React, { Component } from 'react';
import api from '../../services/api';
import Menu from '../Menu/index';
import Promotions from '../Promotions/index';

class Wrapper extends Component {
   constructor(props){
      super(props);

      this.state= {
         promotions: [],
      }
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
      console.log(this.state.promotions);
   }
   
   thisNew = () => {
      const { promotions } = this.state;

      const newPromo = promotions.filter(item => {
         return item.onlyNewCustomers === true;
      })
      console.log(newPromo);
      
   }

   render() {
      return (
         <>
            <Menu handleClickNew={this.thisNew}/>
            <Promotions />
         </>
      )
   }
}

export default Wrapper;

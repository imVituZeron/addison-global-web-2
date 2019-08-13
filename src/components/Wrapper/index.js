import React, { Component } from 'react';
import api from '../../services/api';
import Menu from '../Menu/index';
import Promotions from '../Promotions/index';

class Wrapper extends Component {

   state = {
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
      console.log(response.data)
   }

   render() {
      return (
         <>
            <Menu />
            <Promotions />
         </>
      )
   }
}

export default Wrapper;

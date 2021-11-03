import React from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import * as mdb from 'mdb-react-ui-kit'; // lib
import { Input } from 'mdb-react-ui-kit'; // module
const Button=()=> {
  return (

    <MDBBtnGroup shadow='0'>
      <MDBBtn color='info'><a class="cambia" href="./Login">admin</a></MDBBtn>
      <MDBBtn color='info'><a class="cambia" href="https://www.ubisoft.com/es-mx/game/brawlhalla/brawlhalla">Brawhalla</a></MDBBtn>
      <MDBBtn color='info'><a class="cambia" href="">Contactanos</a></MDBBtn>
    </MDBBtnGroup>

      )
}
export default Button;

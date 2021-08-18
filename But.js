import styled from 'styled-components';
const Wrapper =styled.div`

.papito{

  border:1px solid black;
  display:flex;
  justify-content:space-between;
  padding:10px;
}



`;
const But =()=>{
const Wrappi =styled.button`

background-color:red;


`;
return(

<Wrapper>
<div class="papito">
  <div class="piola">Brawhalla</div>
<div class="boton">

<button>Iniciar Session Bizarrap</button>
<button>Registrarse como el Biza</button>


</div>
</div>
</Wrapper>

)






}

export default But;

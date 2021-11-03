import * as mdb from 'mdb-react-ui-kit'; // lib
import { Input } from 'mdb-react-ui-kit'; // module
import Button from './Button';
const Navbar =()=>{

return(


  <nav class="navbar navbar-expand-lg bg-dark navbar-dark ">

    <div class="container-fluid">

            <a class="navbar-brand" href="#">Brawl<span> BASE</span></a>


      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>


      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        </ul>



      </div>
      <Button />
    </div>
      </nav>




)






}

export default Navbar;

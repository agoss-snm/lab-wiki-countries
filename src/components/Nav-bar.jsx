import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav(){
    return(
        <div>
 <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h4 className='white'>WikiCountries</h4>
          </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
    )
}

export default Nav;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComponent from '../component/NavbarComponent';


function RightNavigation({children}) {
  return (
    <>
    <NavbarComponent/>
     <div style={{display: 'flex', flexDirection: 'row' }}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
          <Navbar >
                 <Nav  >
                  <Container fluid>
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/card"> Card</Nav.Link>
                  </Container>
                  </Nav>
              </Navbar>
          </div>
      <div style={{width: '100%'}}>
        {children}
      </div> 

     </div>
    </>

    
  );
}

export default RightNavigation;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComponent from '../component/NavbarComponent';
import DashboardCity from '../component/City/DashboardCity';

function RightNavigation({children}) {
  return (
    <>
    <NavbarComponent/>
     <div style={{display: 'flex', flexDirection: 'row' }}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
          <Navbar >
                 <Nav  >
                  <Container fluid>
                      <Nav.Link href="/">Партнеры</Nav.Link>
                      <Nav.Link href="/card"> Карты</Nav.Link>
                      <Nav.Link href="/category"> Категория</Nav.Link>
                      {/* <Nav.Link> */}
                        <DashboardCity cityName={'Города'}/>
                        {/* </Nav.Link> */}
                      <Nav.Link href="/address"> Адреса Партнера</Nav.Link>
                  </Container>
                  </Nav>
              </Navbar>
          </div>
      <div style={{width: '100%'}}>
        { children }
      </div> 

     </div>
    </>

    
  );
}

export default RightNavigation;
import Spinner from 'react-bootstrap/Spinner';

function SpinnerComponent() {
  return (
    <>
        <div       
        style={{
          margin: 'auto', 
          padding: '15%'
        }}
          >
        <Spinner 
          animation="border" 
          role="status"
          >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
    </>
  );
}

export default SpinnerComponent;
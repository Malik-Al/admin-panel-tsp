import ListGroup from 'react-bootstrap/ListGroup';

function AddressItem() {
  return (
    <div style={{
        // padding: '4%', 
        margin: '3%', 
        border:'1px solid rgba(0,0,0,0.3)' , 
        borderRadius: '3px',
        display: 'flex',
    }}>
    <ListGroup>
      <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default AddressItem;
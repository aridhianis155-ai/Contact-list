import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const SearchBar = ({ search1, setSearch1 }) => {
  return (
    
         
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={search1}
              onChange={(e)=> setSearch1(e.target.value)}
            />
            </Col>
            </Row>
    </Form>
  )
}

export default SearchBar

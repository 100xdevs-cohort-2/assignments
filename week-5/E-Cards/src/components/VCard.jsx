import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function VCard({ user }) {
  return (

    <Card style={{ flex: '1', margin: '20px' }} >
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.description}
        </Card.Text>
        <Card.Subtitle>Interests</Card.Subtitle>
        <ul>
          {user.interests.map((interest) => <li>{interest}</li>)}
        </ul>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default VCard;
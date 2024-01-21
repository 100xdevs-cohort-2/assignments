
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './App.css'




function App() {

  let data = {
    name: 'ABC',
    description: 'vdmvndskjv dkjv dfskjv dskj dkjv dskj vds vdjnfeuiwfncewjb fdsWJ',
    intrests: ['int1', 'int2', 'int3'],
    linkedin: '',
    twitter: ''
  }


  return (

    
    <>
      <CardComponent userDetails = {data}></CardComponent>
    </>
  )
}



function CardComponent({userDetails}){
  let index = 1
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '30rem', alignContent: 'center' }}>
        <Card.Body style={{ alignContent: 'center' }}>
          <Card.Title>{userDetails.name}</Card.Title>
          <Card.Text>{userDetails.description}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Intrests</Card.Subtitle>
          
          
          {userDetails.intrests.map(function(element, index){
            {index += 1}
            return (
              <Card.Text>{element}</Card.Text>
            )
            
            
          })}
          <Button  variant="primary">LinkedIn</Button>
          <Button style={{ margin: '2px' }} variant="primary">Twitter</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App

import React from 'react';

//import Card Component from React BootStrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Topic = (props) => {

    const {id, name , logo , total} = props.topic;
    console.log(props.topic);
    return (
        <div>
              <Card style={{ width: '18rem' }} className="my-5 bg-black ">
                    <Card.Img variant="dark" src={`${logo}`}/>
                    <Card.Body className='bg-dark'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                         <p>Total Number of Qestions : <span className='fw-semibold'> {total} </span> </p> 
                        </Card.Text>
                        <Button variant="primary">Start {name} Quiz</Button>
                    </Card.Body>
                    </Card>
        </div>
    );
};

export default Topic;
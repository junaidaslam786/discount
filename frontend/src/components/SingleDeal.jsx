import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SingleDeal = ({ deal }) => {
  const { title, description, image, originalPrice, discountedPrice, expiryDate } = deal;
//   const imagePath = require(`../assets/images/${image}`).default;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          Original Price: <del>${originalPrice}</del>
        </Card.Text>
        <Card.Text>
          Discounted Price: ${discountedPrice}
        </Card.Text>
        <Card.Text>
          Expires on: {new Date(expiryDate).toDateString()}
        </Card.Text>
        <Button variant="primary">Shop Now</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleDeal;

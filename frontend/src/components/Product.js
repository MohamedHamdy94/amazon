import React from 'react'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Rating from './Rating';

function Product(props) {
    const {product}=props;
    return (
        <Card className="product card" key={product.slug}>
            <Link to={`/api/products/slug/${product.slug}`}>
                <img className='card-img-top' src={product.image} alt={product.name} />
            </Link>
            <Card.Body className='product-info'>
                <Link to={`/api/products/slug/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                </Link>
                <Card.Text>$ <strong>{product.price}</strong></Card.Text>
                <Button >Add to cart</Button>
            </Card.Body>
        </Card>)
}

export default Product
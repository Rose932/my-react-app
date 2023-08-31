import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            description: '',
            category: '',
            imageURL: '',
            redirect: false,
            error: false
        }
    }

    // Handle Input changes
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    // Handle form submission
    handleSubmit = (event) => {
        //TODO
    }

    render(){
       const { name, price, description, category, image, redirect, error} = this.state;
       if (redirect) {
        return <Redirect to='/products'/>
       }
       return(
        <div className='container mt-5'>
            <h2>Add Product</h2>
            {error ? <p className='text-danger'>There was an error adding the product!</p> : null}
            <Form onSubmit={this.handleSubmit}>
                {/* Name Group START*/}
                <Form.Group controlId='description'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' name='name' value={name} onChange={this.handleChange} />
                </Form.Group>
                {/* Name Group END*/}

                {/* Price Group START*/}
                <Form.Group controlId='price'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type='text' name='price' value={price} onChange={this.handleChange}/>
                </Form.Group>
                {/* Price Group END*/}
                
                {/* Description Group START*/}
                <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' name='description' value={description} onChange={this.handleChange}/>
                </Form.Group>
                {/* Description Group END*/}
                
                {/* Category Group START*/}
                <Form.Group controlId='category'>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type='text' name='category' value={category} onChange={this.handleChange}/>
                </Form.Group>
                {/* Category Group END*/}

                {/* ImageURL Group START*/}
                <Form.Group controlId='image'>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type='text' name='image' value={image} onChange={this.handleChange}/>
                </Form.Group>
                {/* ImageURL Group END*/}
                
                {/* Submit Button START*/}
                <Button variant='primary' type='submit'>Submit</Button>
                {/* Submit Button END*/}
            </Form>
        </div>
       );
    }
}


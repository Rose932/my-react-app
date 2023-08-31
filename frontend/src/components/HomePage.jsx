import React from "react";
import { Product } from "./Product";

class HomePage extends React.Component {

    render() {
        // Create a product object list of products with dummy data
        const products = [
            {
                "name": "Flower Vase",
                "category": "Home Decor",
                "origin": "China",
                "description": "This is a description of the product",
                "imageURL": "https://cdn.pixabay.com/photo/2022/05/31/18/12/flowers-7233987_1280.jpg",
                "imageAlt": "This is a description of the  image",
                "price": 60.50,
                "quantity": 10
            },
            {
                "name": "Chair",
                "category": "Furniture",
                "origin": "Italy",
                "description": "This is a description of the product",
                "imageURL": "https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_1280.jpg",
                "imageAlt": "This is a description of the  image",
                "price": 120.00,
                "quantity": 5
            },
            {
                "name": "Table",
                "category": "Furniture",
                "origin": "Italy",
                "description": "This is a description of the product",
                "imageURL": "https://cdn.pixabay.com/photo/2017/08/01/23/51/apple-2568755_1280.jpg",
                "imageAlt": "This is a description of the  image",
                "price": 240.00,
                "quantity": 2
            },
            {
                "name": "Lamp",
                "category": "Home Decor",
                "origin": "Italy",
                "description": "This is a description of the product",
                "imageURL": "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
                "imageAlt": "This is a description of the  image",
                "price": 45.00,
                "quantity": 20
            },
            {
                "name": "Pillow",
                "category": "Home Decor",
                "origin": "Italy",
                "description": "This is a description of the product",
                "imageURL": "https://cdn.pixabay.com/photo/2020/10/11/16/07/bedroom-5646321_1280.jpg",
                "imageAlt": "This is a description of the  image",
                "price": 20.00,
                "quantity": 30
            },
            {
                "name": "Curtains",
                "category": "Home Decor",
                "origin": "Italy",
                "description": "This is a description of the product",
                "imageURL": "https://cdn.pixabay.com/photo/2016/11/23/18/04/curtains-1854110_1280.jpg",
                "imageAlt": "This is a description of the  image",
                "price": 120.00,
                "quantity": 5
            },
            {
                "name": "Sofa",
                "category": "Furniture",
                "origin": "Italy",
                "description": "This is a description of the product",
                "imageURL": "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg",
                "imageAlt": "This is a description of the  image",
                "price": 450.00,
                "quantity": 3
            },
            {
                "name": "Cupboard",
                "category": "Furniture",
                "origin": "China",
                "description": "This is a description of the product",
                "imageURL": "https://housing.com/news/wp-content/uploads/2022/12/kitchen-cupboard-design-compressed.jpg",
                "imageAlt": "This is a description of the  image",
                "price": 350.00,
                "quantity": 4
            },
        
        ]

        return(
            <div className="jumbotron">

                {/* Product Column START */}
                <div className="d-flex justify-content-center col-12">
                    <div className="row">
                        {/* Map through the products array and create a Product component for each product
                        name
                        origin
                        description
                        imageURL
                        price
                        imageAlt
                        category
                        */}
                        { products.map((product, index) => (
                            <Product
                                key={index}
                                name={product.name}
                                origin={product.origin}
                                description={product.description}
                                imageURL={product.imageURL}
                                price={product.price}
                                imageAlt={product.imageAlt}
                                category={product.category}
                            />
                        )) 
                    }
                    </div>
                </div>
                {/* Product Column END */}
            </div>
        )

    }    

}

export default HomePage;



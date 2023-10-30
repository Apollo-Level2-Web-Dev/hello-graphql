const products = [
    {
        "id": "2a089dca-d882-4305-9e25-d1dfeb93fd12",
        "name": "Basketball",
        "image": "basketball-image.jpg",
        "description": "An official size basketball for both indoor and outdoor play.",
        "price": 29.99,
        "quantity": 30,
        "onStock": true,
        "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "73b8ca8b-ca88-483e-99ea-2fedaf2a1dc1",
        "name": "Football",
        "image": "football-image.jpg",
        "description": "A standard football for casual matches and practice.",
        "price": 19.99,
        "quantity": 25,
        "onStock": true,
        "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "2d1fd6b6-2c2b-423d-a8aa-15fc5bd7232d",
        "name": "Running Shoes",
        "image": "running-shoes-image.jpg",
        "description": "Comfortable running shoes for your active lifestyle.",
        "price": 49.99,
        "quantity": 50,
        "onStock": true,
        "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "42ebd257-b37d-4751-96cd-f160c12a3c28",
        "name": "Smartphone",
        "image": "smartphone-image.jpg",
        "description": "A high-end smartphone with advanced features and performance.",
        "price": 599.99,
        "quantity": 15,
        "onStock": true,
        "category": "1b6c2e31-2e03-4487-bedd-d1139c7e5571"
    },
    {
        "id": "d292ecd9-7eff-4891-aa12-8e8980f88b6b",
        "name": "Laptop",
        "image": "laptop-image.jpg",
        "description": "A powerful laptop for work and entertainment.",
        "price": 899.99,
        "quantity": 10,
        "onStock": true,
        "category": "1b6c2e31-2e03-4487-bedd-d1139c7e5571"
    },
    {
        "id": "591754e7-ac51-4712-b4c5-5dffc22fd8cf",
        "name": "T-Shirt",
        "image": "t-shirt-image.jpg",
        "description": "A comfortable and stylish t-shirt for everyday wear.",
        "price": 14.99,
        "quantity": 100,
        "onStock": true,
        "category": "3b40b998-e38a-4cc4-b796-1fd2aea2567f"
    },
    {
        "id": "7e41c879-841a-4e36-ae61-89ed9f4a4f32",
        "name": "Jeans",
        "image": "jeans-image.jpg",
        "description": "Classic denim jeans for a timeless look.",
        "price": 34.99,
        "quantity": 75,
        "onStock": true,
        "category": "3b40b998-e38a-4cc4-b796-1fd2aea2567f"
    },
    {
        "id": "b8c841e9-57e2-4afc-8619-8c6bba3ee351",
        "name": "Sofa",
        "image": "sofa-image.jpg",
        "description": "A comfortable and stylish sofa for your living room.",
        "price": 499.99,
        "quantity": 5,
        "onStock": true,
        "category": "97b84bd6-c11b-435f-8943-17dc97694451"
    },
    {
        "id": "6446970e-1fad-4972-b7f5-adbd896d79b1",
        "name": "Dining Table",
        "image": "dining-table-image.jpg",
        "description": "A sturdy dining table for family gatherings and meals.",
        "price": 299.99,
        "quantity": 10,
        "onStock": true,
        "category": "97b84bd6-c11b-435f-8943-17dc97694451"
    },
    {
        "id": "43a845da-762e-43ec-bc4d-36a4186361cc",
        "name": "Hiking Boots",
        "image": "hiking-boots-image.jpg",
        "description": "Durable hiking boots for outdoor adventures and treks.",
        "price": 79.99,
        "quantity": 20,
        "onStock": true,
        "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "7b9d46d1-66b7-4fad-a136-938224e13246",
        "name": "Tablet",
        "image": "tablet-image.jpg",
        "description": "A versatile tablet for work and entertainment on the go.",
        "price": 349.99,
        "quantity": 30,
        "onStock": true,
        "category": "1b6c2e31-2e03-4487-bedd-d1139c7e5571"
    },
    {
        "id": "78d84af1-9168-4543-8be6-8f34c44077ce",
        "name": "Dress",
        "image": "dress-image.jpg",
        "description": "An elegant dress for special occasions and formal events.",
        "price": 59.99,
        "quantity": 10,
        "onStock": true,
        "category": "3b40b998-e38a-4cc4-b796-1fd2aea2567f"
    },
    {
        "id": "8cb7eff6-90c1-4710-a11b-e42d5767dd95",
        "name": "Coffee Table",
        "image": "coffee-table-image.jpg",
        "description": "A stylish coffee table for your living room decor.",
        "price": 129.99,
        "quantity": 15,
        "onStock": true,
        "category": "97b84bd6-c11b-435f-8943-17dc97694451"
    },
    {
        "id": "3f88696b-c459-4723-8bfc-1068d648df95",
        "name": "Cycling Helmet",
        "image": "cycling-helmet-image.jpg",
        "description": "A safe and comfortable helmet for cycling",
        "price": 39.99,
        "quantity": 40,
        "onStock": true,
        "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
    },
    {
        "id": "54453d07-1657-462e-8eb2-def82d7ab57d",
        "name": "Desk Chair",
        "image": "desk-chair-image.jpg",
        "description": "An ergonomic desk chair for comfortable work and study.",
        "price": 149.99,
        "quantity": 20,
        "onStock": true,
        "category": "97b84bd6-c11b-435f-8943-17dc97694451"
    },
    {
        "id": "fa253321-b802-4f31-b727-80929b0699cd",
        "name": "Fitness Tracker",
        "image": "fitness-tracker-image.jpg",
        "description": "A fitness tracker to monitor your health and activity.",
        "price": 79.99,
        "quantity": 30,
        "onStock": true,
        "category": "1b6c2e31-2e03-4487-bedd-d1139c7e5571"
    },
    {
        "id": "cd6f280e-4af5-404d-a3bc-79c0393823cf",
        "name": "Winter Jacket",
        "image": "winter-jacket-image.jpg",
        "description": "A warm and stylish winter jacket for cold weather.",
        "price": 69.99,
        "quantity": 25,
        "onStock": true,
        "category": "3b40b998-e38a-4cc4-b796-1fd2aea2567f"
    },
    {
        "id": "6b1e0518-8e0d-48de-9c99-61251900ec18",
        "name": "Coffee Maker",
        "image": "coffee-maker-image.jpg",
        "description": "A coffee maker to brew your favorite morning coffee.",
        "price": 49.99,
        "quantity": 20,
        "onStock": true,
        "category": "97b84bd6-c11b-435f-8943-17dc97694451"
    }
]


export const db = {
    products
}
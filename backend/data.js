import becrypt from "bcryptjs"

const data = {
    admin: [
        {
            name: 'Mohamed Hamdy',
            email: "mohamedhamdy@gmail.com",
            password: becrypt.hashSync("01125594521"),
        }
    ],
    users: [
        {
            name: 'Mohamed Hamdy',
            email: "mohamedhamdy@gmail.com",
            password: becrypt.hashSync("01125594521"),
            isAdmin:true
        },
        {
            name: 'Mohamed Hamdy',
            email: 'ahmedhamdy@gmail.com',
            password: becrypt.hashSync('01125594521'),
            isAdmin:false
        },
        {
            name: 'Mohamed',
            email: "mohamed@gmail.com",
            password: becrypt.hashSync("01125594521"),
            isAdmin:true
        },
        {
            name: 'Hamdy',
            email: 'hamdy@gmail.com',
            password: becrypt.hashSync('01125594521'),
            isAdmin:false
        },
    ],
    products: [
        {
            //_id:'1',
            name: 'laptop hp',
            slug: "nije-slim-shir",
            category: 'laptop',
            image: '/images/lp2.jpg',
            price: 2520,
            countInStock: 0,
            brand: 'laptop',
            rating: 3.5,
            numReviews: 9,
            description: 'HP Elite x2 G4 Multi-Touch 2-in-1 Laptop - 13" FHD BV Sure View Touchscreen w/ IR Camera - 1.6 GHz Intel Core i5-8265U Quad-Core - 8GB - 128GB SSD- Windoes 10 pro',
        },
        {
            //_id:'2',
            name: 'laptop dell',
            slug: "nije-slim-shi",
            category: 'laptop',
            image: '/images/lp3.jpg',
            price: 3100,
            countInStock: 10,
            brand: 'laptop',
            rating: 4.5,
            numReviews: 12,
            description: 'Dell G15 15-5510 Gaming laptop - Intel Core i5-10500H 6Cores, 8GB RAM, 512GB SSD, Nvidia Geforce GTX1650 4GB GDDR6 Graphics, 15.6" FHD IPS 120Hz, Backlit Keyboard, UBUNTU - Shadow Grey',
        },
        {
            //_id:'3',
            name: 'Apple MacBook ',
            slug: "nije-slim-sh",
            category: 'laptop',
            image: '/images/lp4.jpg',
            price: 15000,
            countInStock: 7,
            brand: 'laptop',
            rating: 5.0,
            numReviews: 87,
            description: 'Apple MacBook Pro 2020 Model (13-Inch, Apple M1 chip with 8-core CPU and 8-core GPU, 8GB, 512GB, Touch Bar and Touch ID, MYD92 ), Eng-KB, Space Gray',
        },
        {
            //_id:'4',
            name: 'laptop Lenovo',
            slug: "nije-slim-s",
            category: 'laptop',
            image: '/images/lp5.jpg',
            price: 5120,
            countInStock: 9,
            brand: 'laptop',
            rating: 4.5,
            numReviews: 64,
            description: 'Lenovo Legion 5-15ARH05H Gaming laptop - Ryzen 7 4800H 8-Cores, 16GB RAM, 1TB HDD + 512GB SSD, NVIDIA GeForce RTX 2060 6GB GDDR6 Graphics, 15.6" FHD IPS 144Hz, Windows 10 - Phantom -Black',
        }
    ]
}
export default data;
import React from 'react';

const businessData = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}
function Business() {
    return (
        <div>
            <h1>Business List</h1>
            <h2>{businessData.name}</h2>
            <img src={businessData.imageSrc} alt='MarginOtto Pizzeria'/>
            <p>
                {businessData.address} <br />
                {businessData.city}, {businessData.state} {businessData.zipCode} <br />
                Category: {businessData.category} <br />
                Rating: {businessData.rating} <br />
                Reviews: {businessData.reviewCount} <br />
            </p>
        </div>
    );
}

export default Business;
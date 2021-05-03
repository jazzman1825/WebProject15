async function getProductDetails() 
{
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    let {
        Title,
        image,
        price,
        Id,
        description,
        date,
        contact, 
        place
    } = data
}; 

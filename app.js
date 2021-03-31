let text=""
     
 const productList = [
{
    model: 'Diamond mattress',
    image: '1.jpg',
    price:'30',
    Id: 1,
    description:'<p>Less than a year old mattress</p><p> In good condition, intact and clean</p><p>Great quality, it was just too thick for us.</p> <p>Length 200 cm</p><p>Width 80 cm</p><p>Height 18 cm</p>',
    date: '20/03/2020',
    contact: 'Linda Henkinen',
    place: 'Tuira, Oulu',
    },
{
    model: 'Mirror',
    price: '100',
    image: '2.jpg',
    Id: 2,
    description:'<p>Nice and big mirror in the wooden frame</p><p> Length 100 cm</p><p>Height 180 cm</p>', 
    date: '20/03/2020',
    contact: 'Lily Pad',
    place: 'Linnanmaa, Oulu',
    },
{    
    model: 'Diamond mattress',
    image: '1.jpg',
    price:'30',
    Id: 3,
    description:'<p>Less than a year old mattress</p><p> In good condition, intact and clean</p><p>Great quality, it was just too thick for us.</p> <p>Length 200 cm</p><p>Width 80 cm</p><p>Height 18 cm</p>',
    date: '20/03/2020',
    contact: 'Linda Henkinen',
    place: 'Tuira, Oulu',
},
{
    model: 'Mirror',
    image: '2.jpg',
    price: '100',
    Id: 4,
    description:'<p>Nice and big mirror in the wooden frame</p><p> Length 100 cm</p><p>Height 180 cm</p>', 
    date: '20/03/2020',
    contact: 'Lily Pad',
    place: 'Linnanmaa, Oulu',
    },
{
    model: 'Diamond mattress',
    image: '1.jpg',
    price:'30',
    Id: 5,
    description:'<p>Less than a year old mattress</p><p> In good condition, intact and clean</p><p>Great quality, it was just too thick for us.</p> <p>Length 200 cm</p><p>Width 80 cm</p><p>Height 18 cm</p>',
    date: '20/03/2020',
    contact: 'Linda Henkinen',
    place: 'Tuira, Oulu',
    },
{
    model: 'Mirror',
    image: '2.jpg',
    price: '100',
    Id: 6,
    description:'<p>Nice and big mirror in the wooden frame</p><p> Length 100 cm</p><p>Height 180 cm</p>', 
    date: '20/03/2020',
    contact: 'Lily Pad',
    place: 'Linnanmaa, Oulu',
    },];
 
let productElement=""
for (x = 0; x < productList.length; ++x) {
     productElement=productElement+`
 <div class="container">

    <div class="product-list">

    <div class="productBox">
                    
    <div><img class="productPhoto" src="Images/${productList[x].image}"/></div>
                   
        <div class="productText">
                        
        <p class="productName">${productList[x].model}</p>

        <p>${productList[x].description}</p>

        </div>
<div>

 <span class="productPrice"> ${productList[x].price} &#8364;</span>

  <p class="orangeIcons"><i class="fas fa-user-circle"></i>${productList[x].contact}</p>

  <p class="orangeIcons"><i class="fas fa-phone-alt"></i><i class="fas fa-envelope"></i></p>
                   
</div>

<div class="otherText">
                            
<span class="productPublished"> ${productList[x].date}</span>
    
<p class="productPublished"> ${productList[x].place}</p> </p>
    
</div>
    </div>
</div>
    </div>`
}
let dataPage1 = document.querySelector('#dataPage1')   

dataPage1.innerHTML=productElement

 



const productList = [{
        model: 'Diamond mattress',
        image: '1.jpg',
        price: '30',
        Id: 0,
        description: '<p>Less than a year old mattress</p><p> In good condition, intact and clean</p><p>Great quality, it was just too thick for us.</p> <p>Length 200 cm</p><p>Width 80 cm</p><p>Height 18 cm</p>',
        date: '20/03/2020',
        contact: 'Linda Henkinen',
        place: 'Tuira, Oulu',
    },
    {
        model: 'Mirror',
        price: '100',
        image: '2.jpg',
        Id: 1,
        description: '<p>Nice and big mirror in the wooden frame</p><p> Length 100 cm</p><p>Height 180 cm</p>',
        date: '20/03/2020',
        contact: 'Lily Pad',
        place: 'Linnanmaa, Oulu',
    },
    {
        model: 'Diamond mattress',
        image: '1.jpg',
        price: '30',
        Id: 2,
        description: '<p>Less than a year old mattress</p><p> In good condition, intact and clean</p><p>Great quality, it was just too thick for us.</p> <p>Length 200 cm</p><p>Width 80 cm</p><p>Height 18 cm</p>',
        date: '20/03/2020',
        contact: 'Linda Henkinen',
        place: 'Tuira, Oulu',
    },
    {
        model: 'Mirror',
        image: '2.jpg',
        price: '100',
        Id: 3,
        description: '<p>Nice and big mirror in the wooden frame</p><p> Length 100 cm</p><p>Height 180 cm</p>',
        date: '20/03/2020',
        contact: 'Lily Pad',
        place: 'Linnanmaa, Oulu',
    },
    {
        model: 'Diamond mattress',
        image: '1.jpg',
        price: '30',
        Id: 4,
        description: '<p>Less than a year old mattress</p><p> In good condition, intact and clean</p><p>Great quality, it was just too thick for us.</p> <p>Length 200 cm</p><p>Width 80 cm</p><p>Height 18 cm</p>',
        date: '20/03/2020',
        contact: 'Linda Henkinen',
        place: 'Tuira, Oulu',
    },
    {
        model: 'Mirror',
        image: '2.jpg',
        price: '100',
        Id: 5,
        description: '<p>Nice and big mirror in the wooden frame</p><p> Length 100 cm</p><p>Height 180 cm</p>',
        date: '20/03/2020',
        contact: 'Lily Pad',
        place: 'Linnanmaa, Oulu',
    },
];

function createHomePage() {
    //  I've taken all the code from main part to this function. When this function is called, the general page with products
    //  is going to be drawn on the website (Danila)
    let productElement = ""

    for (x = 0; x < productList.length; x++) {
        productElement = productElement + `
 <div class="container" >

    <div class="product-list">

    <div class="product-box">
                    
    <div><img class="product-photo" src="Images/${productList[x].image}"/></div>
                   
        <div class="produt-text">
                        
        <p class="product-name">${productList[x].model}</p>

        <p>${productList[x].description}</p>

        </div>
<div>

 <span class="product-price"> ${productList[x].price} &#8364;</span>
                   
</div>

<div class="other-text">
                            
<span class="product-published"> ${productList[x].date}</span>
    
<p class="product-published"> ${productList[x].place}</p> </p>

<p class="contact-info"></i>${productList[x].contact}</p>

<button class="buy-btn" onclick="passKey(${x});"><a href="product_page.html"> Buy</a></button>
    
</div>
    </div>
</div>
    </div>`
    }

    let mainPage = document.querySelector('#mainPage')

    mainPage.innerHTML = productElement
}

function createProductPage(id) {

    let mainPage = document.querySelector('#mainPage');
    mainPage.innerHTML = ` <div class="product-description-container">

    <div class="product-description">

       <p class="product-name-description"></p>

           <img class="product-photo-description" src="Images/${productList[id].image}"/>

           <div class="row-directed">

               <div class="product-text-description">
   
              ${productList[id].description} 

   
                   <p class="contact-name-description">Contact: ${productList[id].contact}</p>
   
                   <button class="contact-btn">Show contact </button>
   
               </div>
   
               <div>
   
                    <p class="product-price-description">  ${productList[id].price}  &#8364;</p>
                       
                    <p class="product-published-description">  ${productList[id].date}</p>
   
                    <p class="product-published-description"> ${productList[id].place} </p>
               
               </div>
   
           </div>
           

    </div>    

</div>`;


}

function passKey(value) {
    // This function passes the id of the product from the home page
    // to the blank page of the product
    // in order to draw the exact product fronm the array.
    sessionStorage.setItem('key', value);
};
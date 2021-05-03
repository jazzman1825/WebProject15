// const productList = [
//     {
//         model: 'Diamond mattress',
//         image: '1.jpg',
//         price:'30',
//         id: 0,
//         description:'Less than a year old mattress In good condition, intact and clean Great quality, it was just too thick for us. Length 200 cm Width 80 cm Height 18 cm',
//         date: '20/03/2020',
//         contact: 'Linda Henkinen',
//         place: 'Tuira, Oulu',
//         },
//     {
//         model: 'Mirror',
//         price: '100',
//         image: '2.jpg',
//         id: 1,
//         description:'Nice and big mirror in the wooden frame Length 100 cmHeight 180 cm', 
//         date: '20/03/2020',
//         contact: 'Lily Pad',
//         place: 'Linnanmaa, Oulu',
//         },
//     {    
//         model: 'Diamond mattress',
//         image: '1.jpg',
//         price:'30',
//         id: 2,
//         description:'Less than a year old mattress In good condition, intact and cleanGreat quality, it was just too thick for us. Length 200 cmWidth 80 cmHeight 18 cm',
//         date: '20/03/2020',
//         contact: 'Linda Henkinen',
//         place: 'Tuira, Oulu',
//     },
//     {
//         model: 'Mirror',
//         image: '2.jpg',
//         price: '100',
//         id: 3,
//         description:'Nice and big mirror in the wooden frame Length 100 cmHeight 180 cm', 
//         date: '20/03/2020',
//         contact: 'Lily Pad',
//         place: 'Linnanmaa, Oulu',
//         },
//     {
//         model: 'Diamond mattress',
//         image: '1.jpg',
//         price:'30',
//         id: 4,
//         description:'Less than a year old mattress In good condition, intact and cleanGreat quality, it was just too thick for us. Length 200 cmWidth 80 cmHeight 18 cm',
//         date: '20/03/2020',
//         contact: 'Linda Henkinen',
//         place: 'Tuira, Oulu',
//         },
//     {
//         model: 'Mirror',
//         image: '2.jpg',
//         price: '100',
//         id: 5,
//         description:'Nice and big mirror in the wooden frame Length 100 cmHeight 180 cm', 
//         date: '20/03/2020',
//         contact: 'Lily Pad',
//         place: 'Linnanmaa, Oulu',
//         },
// ];

async function getProductDetails() 
{
    const response = await fetch('http:/localhost:3000/products');
    data = await response.json();
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
    return data;
}; 

function createHomePage() {
    //  I've taken all the code from main part to this function. When this function is called, the general page with products
    //  is going to be drawn on the website (Danila)
    (async () => {
    const productList = await getProductDetails()

    let productElement=""
    
    for (x = 0; x < productList.length; x++) {
         productElement=productElement+`
     <div class="container" >
    
        <div class="product-list">
    
        <div class="product-box">
                        
        <div><img class="product-photo" src="Images/${productList[x].image}"/></div>
                       
            <div>
                            
            <p class="product-name">${productList[x].model}
    
            <p class ="product-text">${productList[x].description}
    
            </div>
    <div>
    
     <span class="product-price"> ${productList[x].price} &#8364;</span>
                       
    </div>
    
    <div class="other-text">
                                
    <span class="product-published"> ${productList[x].date}</span>
        
    <p class="product-published"> ${productList[x].place} 
    
    <p class="contact-info"></i>${productList[x].contact}
    
    <button class="buy-btn" onclick="passKey(${x});"><a href="product_page.html"> Buy</a></button>
        
    </div>
        </div>
    </div>
        </div>`
    }
    
    let mainPage = document.querySelector('#mainPage')   
    
    mainPage.innerHTML=productElement
     })()
}

function createProductPage(id) {
    (async () => {
        const productList = await getProductDetails()
           
        let mainPage = document.querySelector('#mainPage');
        mainPage.innerHTML = ` <div class="product-description-container">
    
        <div class="product-description">
    
           <p class="product-name-description">
    
               <img class="product-photo-description" src="Images/${productList[id].image}"/>
    
               <div class="row-directed">
    
                   <div class="product-text-description">
       
                  ${productList[id].description} 
    
       
                       <p class="contact-name-description">Contact: ${productList[id].contact}
       
                       <button class="contact-btn" onclick="showContacts('8 (981) 106-20-83');">Show contact</button>
       
                   </div>
       
                   <div>
       
                        <p class="product-price-description">  ${productList[id].price}  &#8364;
                           
                        <p class="product-published-description">  ${productList[id].date}
       
                        <p class="product-published-description"> ${productList[id].place} 
                   
                   </div>
       
               </div>
               
    
        </div>    
    
    </div>`;
    
       
     })()
   }

function passKey(value) {
    // This function passes the id of the product from the home page
    // to the blank page of the product
    // in order to draw the exact product from the array.
    sessionStorage.setItem('key', value);
};

function showContacts(text) {
    let buttonText = document.querySelector('.contact-btn');
    buttonText.innerHTML = `${text}`
};

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



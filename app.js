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

 //  a loop that are creating products from the produc list above

let productElement=""
for (x = 0; x < productList.length; x++) {
     productElement=productElement+`
 <div class="container">

    <div class="product-list">

    <div class="product-box">
                    
    <div><img class="product-photo" src="Images/${productList[x].image}"/></div>
                   
        <div class="product-text">
                        
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

<button class="buy-btn"> <a href="product_page.html">Buy</a></button> 
    
</div>
    </div>
</div>
    </div>`
}
let mainPage = document.querySelector('#mainPage')   

mainPage.innerHTML=productElement

//productPage 

function showDetailView(productElementId) {
    console.log(productElementId);
   const productDetails = productList.find(productElement => productElement.Id ===  productElementId);

   document.querySelector('#mainPage').style.display = "none";
  

   
   let productPage = document.querySelector('#productPage');
   productPage.innerHTML = ` <div class="product-description-container">

   <div class="product-description">

       <p class="product-name-description"></p>

           <img class="product-photo-description" ${productDetails.image} "/>

           <div class="row-directed">

               <div class="product-text-description">
   
              ${productDetails.description} 

   
                   <p class="contact-name-description">Contact: John Smith</p>
   
                   <button class="contact-btn">Show contact </button>
   
               </div>
   
               <div>
   
                    <p class="product-price-description">  ${productDetails.price}  &#8364;</p>
                       
                    <p class="product-published-description">  ${productDetails.date}</p>
   
                    <p class="product-published-description"> ${productDetails.place} </p>
               
               </div>
   
           </div>
           

   </div>    

</div>`;

   
   }


//PopUp 
// let popUpElements=""
// for (x = 0; x < 1; x++) {
//     popUpElements += `
//     <div id="Pop-up">

//     <h1 id="Bazaar-name">Bazaar</h1>

//     <p id="sign-in">Sign in</p>

//     <p>Email or phone number</p>

//     <input class="email-password">

//     <p>Password</p>

//     <input  class="email-password">

//     <p><a href="#" class="link forgot-password"> I forgot my password</a></p>

//     <button id="Login-btn">Log in</button>

//     <p id="registration"><span>New to Bazaar? </span><span><a href="#" class="link join-now"> Join now</a></span></p>

// </div>`
// }

// let popUp = document.querySelector('#Pop-up')
// popUp.innerHTML=popUpElements
 

// function openForm() {
//     document.getElementById("Pop-up").style.display = "block";
//   }
  
//   function closeForm() {
//     document.getElementById("Pop-up").style.display = "none";
//   }


function moreButtons(num) {
    // the function adds buttons to the main block of the main page
    let button=""
    for (i = 0; i < num; ++i)
    { 
    button = button+ 
    `
    <button  href="secondPage.html" onclick="passKey(${i});"> <a href="secondPage.html">show id ${i}</a></button>
    <br></br>
    `
    }
    let block = document.querySelector('#block') 
    block.innerHTML=button;
};
function createSecondPage(key) {
    let secondPageData = 
    `
    <div>${key}</div>
    `
    let block = document.querySelector('#block') 
    block.innerHTML=secondPageData;
};
function passKey(value){
    sessionStorage.setItem('key', value);
    let data = sessionStorage.getItem('key');
};

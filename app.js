var array = [];


fetch('http://localhost:3000/users')
.then(response => response.json())
.then(data => console.log(data));

function showdata() {
    console.log(array(0))
}
let arrMenu = [
   {menu: "Menu Gourmet", Precio:3400},
   {menu: "Menu veggie", Precio: 2900},
   {menu: "Menu con Carne", Precio: 3200},
]
const Price = document.getElementById('Price');
Price1.innerHTML = arrMenu[2].Precio;
Price2.innerHTML = arrMenu[0].Precio;
Price3.innerHTML = arrMenu[1].Precio;
const Tag = document.getElementById('tag');
tag1.innerHTML = arrMenu[2].menu;
tag2.innerHTML = arrMenu[0].menu;
tag3.innerHTML = arrMenu[1].menu;

const boton1 = document.getElementById("btn");
boton1.addEventListener("click", function(e) {
	let cant = prompt("cuantos");
   alert("Su total a pagar sera: " + cant*arrMenu[2].Precio )
});



const boton2 = document.getElementById("btn2");
boton2.addEventListener("click", function(e) {
	let cant = prompt("cuantos");
   alert("Su total a pagar sera: " + cant*arrMenu[0].Precio )
});

const boton3 = document.getElementById("btn3");
boton3.addEventListener("click", function(e) {
	let cant = prompt("cuantos");
   alert("Su total a pagar sera: " + cant*arrMenu[1].Precio )
});
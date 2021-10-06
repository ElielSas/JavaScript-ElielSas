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

let Value = prompt("Que menu desea ? ")
let cantidad = prompt("Que cantidad ? ")
if (Value = 1 ) {

   alert("Su costo sera de $" + arrMenu[2].Precio*cantidad)
} else if (Value = 2) {
   alert("Su costo sera de $" + arrMenu[0].Precio*cantidad)
} else if (Value = 3) {
   alert("Su costo sera de $" + arrMenu[1].Precio*cantidad)
}

let arrMenu = [
   {menu: "Menu Gourmet", Precio:3400, pic:"media/gourmet.jpg",num: 1 },
   {menu: "Menu veggie", Precio: 2900, pic:"media/veggie.jpg",num: 2},
   {menu: "Menu con Carne", Precio: 3200, pic:"media/carne.jpg",num: 3},
]

const element = document.querySelector("#example");
arrMenu.forEach ( el => {
   element.innerHTML +=
   `<div class="content container2" >
         <img src="${el.pic}">
         <h3 >${el.menu}</h3>
         <strong >${el.Precio}</strong>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         <ul>
            <li><i class="fa fa-star" aria-hidden="true"></i></li>
            <li><i class="fa fa-star" aria-hidden="true"></i></li>
            <li><i class="fa fa-star" aria-hidden="true"></i></li>
            <li><i class="fa fa-star" aria-hidden="true"></i></li>
            <li><i class="fa fa-star" aria-hidden="true"></i></li>
         </ul>
         <button class="buy-1" id="btn${el.num}">Buy Now</button>
      </div>`
});



const boton1 = document.getElementById("btn1");
boton1.addEventListener("click", function(e) {
	let dir = prompt("intruduzca su direccion: ");
   localStorage.setItem(dir,arrMenu[0].menu)
});



const boton2 = document.getElementById("btn2");
boton2.addEventListener("click", function(e) {
	let dir = prompt("intruduzca su direccion: ");
   localStorage.setItem(dir,arrMenu[1].menu)
});

const boton3 = document.getElementById("btn3");
boton3.addEventListener("click", function(e) {
	let dir = prompt("intruduzca su direccion: ");
   localStorage.setItem(dir,arrMenu[2].menu)
});


const carrito = document.querySelector("#carro")
if (boton1 == true) {
   `<p><a>${arrMenu[0].menu}</a><button id="remove">Remove</button></p>`
}
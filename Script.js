

let arrMenu = [
   {menu: "Menu Gourmet", Precio:3400, pic:"media/gourmet.jpg",num: 1 },
   {menu: "Menu Veggie", Precio: 2900, pic:"media/veggie.jpg",num: 2},
   {menu: "Menu Carne", Precio: 3200, pic:"media/carne.jpg",num: 3},
]


const element = document.getElementById("example");
arrMenu.forEach ( el => {
   element.insertAdjacentHTML( 'beforeend',
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
         <button class="buy-${el.num}" id="btn">Buy Now</button>
      </div>`
   )
});



let cart = [];

$('.buy-1').on('click', () => {
  cart.push(arrMenu[0]);
  $('#aca').append(`
  <div class="container del0" >
      <div>
      <img src="media/gourmet.jpg" alt="asdad">
      </div>
      <div class="container-card">
         <ol>
            <li>Menu:${arrMenu[0].menu}</li>
            <li>Precio:${arrMenu[0].Precio}</li>
         </ol>
      </div>
      <button onclick="myFunction0()"  class="end">Eliminar</button>
      </div>
  `)
});


$('.buy-2').on('click', () => {
   cart.push(arrMenu[1]);
   $('#aca').append(`
   <div class="container del1" >
      <div>
      <img src="media/veggie.jpg" alt="asdad">
      </div>
      <div class="container-card">
         <p>Menu:${arrMenu[1].menu}</p>
         <p>Precio:${arrMenu[1].Precio}</p>
      </div>
      <button onclick="myFunction1()" class="end">Eliminar</button>
      </div>
   </div>
`  )
});

$('.buy-3').on('click', () => {
   cart.push(arrMenu[2]);
   $('#aca').append(`
   <div class="container del2" >
      <div>
      <img src="media/carne.jpg" alt="asdad">
      </div>
      <div class="container-card">
         <p>Menu:${arrMenu[2].menu}</p>
         <p>Precio:${arrMenu[2].Precio}</p>
      </div>
      <button onclick="myFunction2()"  class="end">Eliminar</button>
      </div>
   </div>
`  )
});


$(".header").prepend('<h5  style="display: none" >VIANDAS POP</h5>');
$("h5").fadeIn(4000);


function myFunction0() {
   $('.del0').remove();
}

function myFunction1() {
   $('.del1').remove();
}

function myFunction2() {
   $('.del2').remove();
}



class comic {
    constructor (id,titulo,valor, personaje, imagen){
        this.id=id,
        this.titulo=titulo,
        this.valor = valor,
        this.personaje= personaje,
        this.imagen= imagen
    }
    mostrarDatos(){
        console.log(`El numero del comic es ${this.id} , el titulo del es ${this.titulo} , el valor es ${this.valor} y el personaje que lo protagoniza es ${this.personaje}`)
    };
}

const comic1 = new comic(1 , "La era de Apocalipsis" , 1500, "x-men" , "apoxmen01.jpg")
const comic2 = new comic(2, "The dark Knight" , 2000 , "Batman", "the dark night.jpg")
const comic3 = new comic(3, "Spiderverse" , 2500 , "Spiderman" , "spiderverce.jpg")
const comic4 = new comic(4, "El hijo rojo" ,3000 , "Superman", "hijo rojo.jpg")
const comic5 = new comic (5, "Watchmen" , 3500 , "Watchmen", "watchmen.jpg")
const comic6 = new comic(6,"La secta " ,4000 , "Batman" , "la secta.jpg")
const comic7 =new comic (7, "Las 4 estaciones" , 4500 , "Superman" , "las 4 estaciones.jpg")
const comic8 = new comic(8 , "House of M" , 5000 , "x-men" , "House of M.jpg")
const comic9 =new comic (9, "el libro de ezequiel", 5500 , "Spiderman", "el libro de ezequiel.jpg")
let carrito = []
let comics = []

if (localStorage.getItem("comics")){
    comics=JSON.parse(localStorage.getItem("comics"))
}else{
    console.log("seteado perro")
    comics.push(comic1, comic2, comic3, comic4 , comic5, comic6, comic7 , comic8 , comic9)
    localStorage.setItem("comics" , JSON.stringify(comics))
}

let contenedor = document.getElementById("contenedor")
comics.forEach((comic)=>{
    let muestraComic = document.createElement("div")
    muestraComic.innerHTML =` <div id= "${comic.id}"class="card" style="width: 18rem;">
    <img src="./img/${comic.imagen}" class="card-img-top" alt="${comic.titulo} de ${comic.personaje} ">
    <div class="card-body"
      <h4 class="card-title">${comic.titulo}</h4>
      <h5>${comic.personaje}
      <p class="card-text">El valor del comic es de ${comic.valor}</p>
      <button id="agregarBtn${comic.id}" class="btn btn-outline-success btnComprar">Agregar al carrito</button>
      </div>
  </div>`
    contenedor.append(muestraComic)
 let btnAgregar = document.getElementById( ` agregarBtn ${comic.id}`)
 console.log(btnAgregar)
 btnAgregar.addEventListener("click" , ()=>{
    console.log(comic)
    agregarAlCarrito(comic)
 })
})
let btnCompra = document.getElementsByClassName("btnComprar")
for(let compra of btnCompra){
    compra.addEventListener("click" , ()=>{
        alert("el producto ha sido comprado")
    })
    function agregarAlCarrito(comic){
        productosEnCarrito.push(comic)
        console.log(productosEnCarrito)
    }}
    
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById(`precioTotal`)    
botonCarrito.addEventListener("click" , () =>{
    cargarProductosCarrito(productosEnCarrito)
})
function cargarProductosCarrito(array){
modalBody.innerHTML=""
array.forEach((prductoCarrito) =>{
    modalBody.innerHTML +=
  `  <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
   
    <div class="card-body">
            <h4 class="card-title">${productoCarrito.titulo}</h4>
        
            <p class="card-text">$${productoCarrito.precio}</p> 
            <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
    </div>    


</div>`
compraTotal(array)

})

}
function compraTotal(array){
    let acumulador =0
    acumulador = array.reduce((acumulador, productoCarrito) =>{
        return acumulador + productoCarrito.precio
    }, 0 )
    if (acumulador == 0){
        parrafoCompra.innerHTML = ("no hay productos en la compra")
    }else{
        parrafoCompra.innerHTML = `el total del carrito es de ${acumulador}`
    }
}

btnDarkMode.addEventListener ("click" , ()=>{
    console.log("Funciona btn oscuro")
    document.body.style.backgroundColor="black" 
    document.body.style.color="red" 
    
    localStorage.setItem("darkMode" , true)
})
btnLightMode.addEventListener ("click" , ()=>{
    console.log("Funciona btn claro")
    document.body.style.backgroundColor="white" 
    document.body.style.color="black" 

    localStorage.setItem("darkMode" , false) 
})

let btnEliminarMode = document.getElementById("btnRemoveItem")
btnEliminarMode.addEventListener("click" , ()=>{
    localStorage.removeItem("darkMode") 
    localStorage.clear() 
})






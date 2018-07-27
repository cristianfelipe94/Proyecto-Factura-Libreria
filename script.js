let answ = prompt ("Desea realizar compra? Si//No");
let name = "";
let id = "";
let customernumb = "";
let matematicasprecio = 2000;
let socialesprecio = 5000;
let fisicaprecio = 4000;
let cantidadMate = 0;
let cantidadSoc = 0;
let cantidadFis = 0;
let total = 0;
let subtotal = 0;

while (answ == "no" || answ == "No") {
    answ = prompt ("Desea realizar compra? Si//No");
}

if (answ == "si" || answ == "Si") {
        name = prompt ("Ingrese nombre completo.");
        id = prompt ("Ingrese numero ID");
        customernumb = prompt ("Ingrese tipo de cliente, 1,2,3");
    }else {
        console.log ("Valor ingresado no es una respuesta valida");
    }

if (answ == "si" || answ == "Si"){
    answ = prompt ("Desea Comprar libros de Matematicas? Si/No");
    if (answ == "si" || answ == "Si"){
        cantidadMate = prompt (`Cuantos libros desea comprar? Valor de Libro = ${matematicasprecio}`)
    }else{
        cantidadMate = 0;
    }
    answ = prompt ("Desea Comprar libros de Sociales? Si/No");
    if (answ == "si" || answ == "Si"){
        cantidadSoc = prompt (`Cuantos libros desea comprar? Valor de Libro = ${socialesprecio}`)
    }else{
        cantidadSoc = 0;
    }
    answ = prompt ("Desea Comprar libros de Fisica? Si/No");
    if (answ == "si" || answ == "Si"){
        cantidadFis = prompt (`Cuantos libros desea comprar? Valor de Libro = ${fisicaprecio}`)
    }else{
        cantidadFis = 0;
    }
}

let descuento;
    switch (customernumb) {
        case 1:
            descuento = 0.3; 
            break;
        case 2:
            descuento = 0.2; 
            break;
        case 3:
            descuento = 0.1; 
            break;
        default:
            descuento = 0;
            break;
    }
    if (answ == "si" || answ == "Si"){
        total = ((cantidadMate * matematicasprecio)+(cantidadSoc * socialesprecio)+(cantidadFis * fisicaprecio)- descuento);
    }else if (answ == "si" || answ == "Si") {
        subtotal = ((cantidadMate * matematicasprecio)+(cantidadSoc * socialesprecio)+(cantidadFis * fisicaprecio));
    }

console.log (`El nombre del cliente es ${name}.`);
console.log (`El numero de ID es ${id}.`);
console.log (`Usted es cliente tipo ${customernumb}, con un descuento de ${descuento}.`);
console.log (`Cantidad de libros de Matematicas = ${cantidadMate}. Precio por libro = ${matematicasprecio}.`);
console.log (`Cantidad de libros de Sociales = ${cantidadSoc}. Precio por libro = ${socialesprecio}.`);
console.log (`Cantidad de libros de Fisica = ${cantidadFis}. Precio por libro = ${fisicaprecio}.`);
console.log (`El subtotal sin el descuento es de ${subtotal}.`)
console.log (`El total es de ${total}.`)

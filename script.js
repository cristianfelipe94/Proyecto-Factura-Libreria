//Prompt inicial, borrar valores en cada programa.
let answ = prompt ("Desea realizar compra? Si//No");
let name = "";
let id = "";
let customernumb = "";

//Valores para las constantes,precios y descuentos.
let matematicasprecio = 2000;
let socialesprecio = 5000;
let fisicaprecio = 4000;


//Inicializar valores a 0.
let cantidadMate = 0;
let cantidadSoc = 0;
let cantidadFis = 0;
let cantidadNueva = 0;
let sum = 0;

let nombreNuevos = "";

//Rechazados.
let precioNuevos;

//Inicia programa.
while (answ == "no" || answ == "No" || answ == "nO" || answ == "NO") {
    answ = prompt ("Desea realizar compra? Si//No");
}

if (answ == "si" || answ == "Si") {
        name = prompt ("Ingrese nombre completo.");
        id = prompt ("Ingrese numero ID");
        customernumb = prompt ("Ingrese tipo de cliente, 1,2,3");
        customernumb = parseInt (customernumb);
    }else {
        console.log ("Valor ingresado no es una respuesta valida");
    }

if (answ == "si" || answ == "Si"){
    answ = prompt ("Desea Comprar libros de Matematicas? Si/No.");
    if (answ == "si" || answ == "Si"){
        cantidadMate = prompt (`Cuantos libros desea comprar? Valor de Libro = ${matematicasprecio}`);
        cantidadMate = parseInt (cantidadMate);
    }else{
        cantidadMate = 0;
    }
    answ = prompt ("Desea Comprar libros de Sociales? Si/No");
    if (answ == "si" || answ == "Si"){
        cantidadSoc = prompt (`Cuantos libros desea comprar? Valor de Libro = ${socialesprecio}`);
        cantidadSoc = parseInt (cantidadSoc);
    }else{
        cantidadSoc = 0;
    }
    answ = prompt ("Desea Comprar libros de Fisica? Si/No");
    if (answ == "si" || answ == "Si"){
        cantidadFis = prompt (`Cuantos libros desea comprar? Valor de Libro = ${fisicaprecio}`);
        cantidadFis = parseInt (cantidadFis);
    }else{
        cantidadFis = 0;
    }
    answ = prompt ("Desea Comprar libros de otra clase? Si/No");
    if (answ == "si" || answ == "Si"){
        cantidadNueva = prompt ("Cuantos nuevos tipos de libros desea comprar?");
        cantidadNueva = parseInt (cantidadNueva);

        nombreNuevos = new Array (cantidadNueva);
        precioNuevos = new Array (cantidadNueva);
        for(let i = 0; i < cantidadNueva; i++){
            nombreNuevos[i] = prompt ("Nombre del nuevo libro?");
            precioNuevos[i] = prompt ("Valor del nuevo libro?");
            sum += parseInt (precioNuevos[i]);
        }
    }else{
        cantidadNueva = 0;
        cantidadNueva = parseInt (cantidadNueva);

        precioNuevos = 0;
        precioNuevos = parseInt (precioNuevos);

        nombreNuevos = "";
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

let subtotal = (cantidadMate * matematicasprecio) + (cantidadSoc * socialesprecio) + (cantidadFis * fisicaprecio) + (cantidadNueva * sum);
let total = subtotal - (subtotal * descuento);


console.log (`El nombre del cliente es ${name}.`);
console.log (`El numero de ID es ${id}.`);
console.log (`Cantidad de libros de Matematicas = ${cantidadMate}. Precio por libro = ${matematicasprecio}.`);
console.log (`Cantidad de libros de Sociales = ${cantidadSoc}. Precio por libro = ${socialesprecio}.`);
console.log (`Cantidad de libros de Fisica = ${cantidadFis}. Precio por libro = ${fisicaprecio}.`);
console.log (`Nueva cantidad de libros agregados = ${cantidadNueva}.`);
console.log (`Nombres de nuevos libros = ${nombreNuevos}.`);
console.log (`Precio nuevos libros = ${precioNuevos}.`);
console.log (`El subtotal sin el descuento es de = ${subtotal}.`);
console.log (`Usted es cliente tipo ${customernumb}, por lo que tiene un descuento de ${descuento}.`);
console.log (`El total es de = ${total}.`);

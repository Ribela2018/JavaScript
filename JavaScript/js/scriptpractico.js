
// con esta sentencia lo que hacemos es cambiar el ID selecciona por el string que le pasemos ver ejemplo 
// document.getElementById("titulo").innerHTML = "ESTE CURSO ES DE JS CAMBIO";

// document.getElementById("boton").innerHTML = "JS JS JS GENIAL"	

// sintaxis del IF CONDICIONAL:  
/*var num = 14;

	if (num < 12){
		
		alert("buenos dias");

	}
	else if(num>13){
		alert("buenas noches");
	}
	else{
		alert ("buenas tardes");

	}*/
	



// function changeName(){

// var nombre= "JAVA"; 
// var apellido= " SCRIPT";
// document.getElementById("titulo").innerHTML = nombre + apellido;
// }


// function suma(numero1,numero2){
// aqui se escribe una sentencia con alguna tarea o calculo
	// return numero1 + numero2;
// }

// document.getElementById('titulo').innerHTML= suma(7,3);



 // document.getElementById('animacion').onclick = function(){changeButon()};

 // function changeButon() {
	 // document.getElementById('titulobar').innerHTML= "YA ME PULSASTE LO SE POR QUE TENGO JS" ;
 // }



// funcion para contar las veces que se pulsa el boton !!! 
// var numberOfClicks = 0;

// function myButton_onclick() {
   // numberOfClicks++;
   // window.document.form1.myButton.value = 'Botón pulsado ' + numberOfClicks + 
   // 'veces';
// }

// con esto agregamos y quitamos clases 
 // document.getElementById('titulobar').classList.add("bg-danger");
 // document.getElementById('titulobar').classList.remove("display-4");


// document.getElementsByTagName('animacion').onclick = function(){animar()};
// function animar (){
// document.getElementById('barra').classList.add("progress-bar-animated");
// }



// funciones para animar barras de progresos quitar y agregar clases 
/*function animar (){

	document.getElementById('barra').classList.toggle("final");
	document.getElementById('barra').classList.toggle("progress-bar-animated"); 
	// document.getElementById('titulobar').classList.add("progress-bar-animated");
	// document.getElementById('titulobar').innerHTML= "YA ME PULSASTE LO SE POR QUE TENGO JS" ;
}
document.getElementById('animacion').onclick = function(){animar()};*/



/*// practica FOR iteraciones


pero de esta forma no es optima 
var colores = ["azul","verde","rojo"];

			alert(colores[0])
			alert(colores[1])
			alert(colores[2])*/

/* esta sera la forma correcta de trabajar el FOR 
var colores = ["azul","verde","rojo","amarillo"];
	for (let color of colores) {// ECMAScript6
				alert(color);
				}			
*/
	
	// var parrafos = document.querySelectorAll("p");
		// console.log(parrafos);
// esta es la nueva forma del FOR para ECMAScript6
		/*for(let parrafo of parrafos){
			parrafo.classList.add("text-danger");
		}*/

// forma anterior 

// for(i=0; i<parrafos.length; i++){
	// parrafos[i].classList.add("text-danger");
// }
	


// ejemplo y practica con array en JS 
/*function array(){

 var lenguaje = ["español","portugues","ingles","frances"];

lenguaje.push("italiano");// para colocar otra pocision dentro del array en la parte final array ya definido
lenguaje.unshift("aleman"); // para colocar otra pocision dentro del array en la parte inicial array ya definido

 	document.getElementById("titulo").innerHTML = lenguaje.length;

 	 console.log(lenguaje);*/ // con esto verificamos con F12 consola que esta pasando o que esta agarrando 


// }
// practica FOR iteraciones




/*// Esto es para trabajar IF CONDICIONAL con js 
function ifcondicional(){

	var num = 11;

	if (num < 12){

		alert("buenos dias");
	}
}


function color(){

	var color = document.getElementById("color").value; // con esta linea estamos agarrando los datos pasado por el objeto en este caso es un input
	// console.log(color);	
if(color=="azul"){
	document.getElementById("titulo").classList.add("text-primary");
}else if(color=="rojo"){
	document.getElementById("titulo").classList.add("text-danger");
}else{
	document.getElementById("titulo").classList.add("text-warning");
}

}
document.getElementById("boton").onclick=function (){color()};*/

// document.getElementById("boton").onclick=function (){  // con esto detectamos que se presiono el click y se procedera a realizar una funcion anonima 


// var color = document.getElementById("color").value; // con esta linea estamos agarrando los datos pasado por el objeto en este caso es un input

// if(color=="azul"){
	// document.getElementById("titulo").classList.add("text-primary");



// } 

// }// Esto es para trabajar IF CONDICIONAL con js




/*// PRACTICA DE WHILE
document.getElementById("boton").onclick = function(){

	
	
var numcap = document.getElementById("numeroCiclos").value; // con esto capturo los datos o valores que me pasara el usuario por el input
var repeticiones =0;
var maquina = 5;
var stop = false; 

	while (repeticiones<=numcap && stop == false){

		if(numcap==maquina){
			document.getElementById("resultado").innerHTML += "Ganaste ";
			stop = true;
		}
		
		else{
			document.getElementById("resultado").innerHTML +="EL NUMERO PERDIO "+ repeticiones +"</br>";
			repeticiones++;
		}		
	}
}*/ // PRACTICA DE WHILE





/*// TALLER DEL TUTO JS VIDEO  11 Menú Redes sociales
document.getElementById("boton").onclick = function(){

	document.getElementById("iconos-sociales").classList.toggle("hidden");


}*/// TALLER DEL TUTO JS VIDEO  11 Menú Redes sociales


// OBJETOS QUE SON COMO HACERLOS 

var perro = { nombre:"thc", edad:5, vivo:true};
var perro2 = { nombre:"weed", edad:3, vivo:false};
console.log(perro);
// capturamos los elementos introducidos por el usuario en el html
const cantidad = document.getElementById('cantidad');
let generar = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');


function generadorContrasenia(cantidad){
    // creo una variable tipo arreglo;
    let passwordFactory = [];
    // convierto la variable cantidad en número
    cantidad = parseInt(cantidad);
    // itinero la cantidad que el usuario indico y genero un numero aleatorio 
    // asociado al protocolo ascci 
if(cantidad>=8){
    for(i = 0; i < cantidad; i++){
    
        let codigoAscci = Math.floor(Math.random()*(126 - 33 + 1 ))+33;
        passwordFactory[i] =  String.fromCharCode(codigoAscci);
    }
}else{
    return alert("¡¡¡No se aceptan 0 o  números inferiores a 8 digitos!!!");
}
 
 // retorno un cadena STRING  utilizando el método join que convierte un arreglo a una cadena
return passwordFactory.join('');
}

// a través de la función del evento addEvent, realizo la conexión entre los elementos del DOM con la función creada --> generadorContrasenia
generar.addEventListener('click', function(){
 const cantidadCaracteres  = cantidad.value; 
 contrasena.value = generadorContrasenia(cantidadCaracteres);
});









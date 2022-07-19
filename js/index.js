//Desafio Simulador
function consulta (){
    let pregunta = prompt("¿Desea convertir sus pesos a Dolar o Euro?")
    let dolar = 223.99
    let euro = 305
   
if (pregunta.toLowerCase()== "dolar"){
    us = parseInt(prompt("Ingrese el monto que desea convertir a dolar"))
    console.log("El monto ingresado es equivalente a USD " + us/dolar);
    alert("El monto ingresado es equivalente a USD " + us/dolar)    
}   
else if (pregunta.toLowerCase()== "euro"){
   eur = parseInt(prompt("Ingrese el monto que desea convertir a Euros")) 
   console.log("El monto ingresado es equivalente a EUR " + eur/euro);
   alert("El monto ingresado es equivalente a EUR " + eur/euro)
       
}else{
    alert("La moneda ingresada no ha sido reconocida")
}
}
consulta()
//Fin desafio simulador

//Primer desafio CICLOS
// let condicion = true
// do{
//     let club = prompt("¿Que club es el mas grande de la argentina?")
//     if(club.toLowerCase()=="river"){
//         console.log("La respuesta es correcta!");
//         condicion = false        
//     }else{
//         console.log("Respuesta incorrecta, volve a intentar!");
//     }
// }while(condicion)
//Fin desafio CICLOS
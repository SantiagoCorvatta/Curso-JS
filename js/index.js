//Desafio Simulador
function consulta (){
    let pregunta = prompt("¿Desea convertir sus pesos a Dolar o Euro?")
    let dolar = 223.99
    let euro = 305
    
if (pregunta.toLowerCase()== "dolar"){    
    let us = parseInt(prompt("Ingrese el monto que desea convertir a dolar"))
    let valorus = us / dolar
    console.log("El monto ingresado es equivalente a USD " + valorus.toFixed(2));
    alert("El monto ingresado es equivalente a USD " + valorus.toFixed(2))    
}   
else if (pregunta.toLowerCase()== "euro"){
   let eur = parseInt(prompt("Ingrese el monto que desea convertir a Euros"))
   let valoreur = eur / euro 
   console.log("El monto ingresado es equivalente a EUR " + valoreur.toFixed(2));
   alert("El monto ingresado es equivalente a EUR " + valoreur.toFixed(2))
       
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
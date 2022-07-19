function consulta (){
    let pregunta = prompt("¿Desea convertir sus pesos a Dolar o Euro?")
    let dolar = 223.99
    let euro = 305
    let respuesta = true
if (pregunta.toLowerCase()== "dolar"){
    us = parseInt(prompt("Ingrese el monto que desea convertir a dolar"))
    console.log("El monto ingresado es equivalente a USD " + us/dolar);
    alert("El monto ingresado es equivalente a USD " + us/dolar)
    respuesta = false
} 
   
if (pregunta.toLowerCase()== "euro"){
   eur = parseInt(prompt("Ingrese el monto que desea convertir a Euros")) 
   console.log("El monto ingresado es equivalente a EUR " + eur/euro);
   alert("El monto ingresado es equivalente a EUR " + eur/euro)
    
}else{
    alert("La moneda ingresada no ha sido reconocida")
}
}
consulta()


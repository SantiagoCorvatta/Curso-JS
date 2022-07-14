let condicion = true
do{
    let club = prompt("¿Que club es el mas grande de la argentina?")
    if(club.toLowerCase()=="river"){
        console.log("La respuesta es correcta!");
        condicion = false        
    }else{
        console.log("Respuesta incorrecta, volve a intentar!");
    }
}while(condicion)












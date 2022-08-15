console.log(/----------------------------Iteración #1: Fetch---------------------------------/)

/*Iteración #1: Fetch*/

/*1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js.*/
const agifyURL = "https://api.agify.io?name=michael"
const agifyInfo = fetch(agifyURL)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });


/*1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/
const baseUrl = 'https://api.nationalize.io';

  const input = document.querySelector('input');
  const button = document.querySelector('button');

  const getApi = async () =>{
    let api = await fetch(`https://api.nationalize.io/?name=${input.value}`);
    let convertToJson = await api.json();
    console.log(convertToJson)
  }
  
button.addEventListener("click", getApi) 

/*1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.*/

const mappedCharacters = async ((character)=>{
  console.log(character)
  const cadena = character.results.country.map((element)=> {
    return `tienes un porcentaje de ${element.country_id} y una probabilidad de ${element.probability}`

  })

  return `Mi nombre es ${character.results.name} y mi procedencia es ${cadena.forEach(element => {
    element
  })}`
})
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>*/

/*1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.*/
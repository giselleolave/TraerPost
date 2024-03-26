//Captura de dato para imprimir en front
const datosPost = document.querySelector("#post-data")

//Función para pintar datos en el front
const pintarDatos = datos => {
    datos.forEach(item => {
        datosPost.innerHTML += `
        <ul>
        <li><strong>${item.title}</strong></li>
        <p>${item.body}</p>
         </ul>
      `;
    });
};

//Función para traer los post de la api
const getPosts = async () => {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const datos = await response.json();
        pintarDatos(datos);//Llamada a función para pintar datos
    } catch (error) {
        //Captura y muestra de error
        console.log("Error al traer datos: " + error);
    }
       
   };
   

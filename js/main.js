const container = document.querySelector("#container")

const rightContainer = document.querySelector("#rightContainer")

const urlBase = "https://jsonplaceholder.typicode.com"



document.addEventListener("click", (ev)=>{
    //console.log(ev.target)
    if (ev.target.matches("button") ) {
      let tag= ev.target.id;
      //console.log(tag)
      pintarNoticia(ev.target.id)
    }
  
    })




const obtenerDatos =async(url)=>{
  try{
    const respuesta = await fetch(`${urlBase}/${url}`)
        
      //  return respuesta.ok ? respuesta.json() : Promise.reject("error")
           
        if (respuesta.ok) {
            let datos=await respuesta.json()
           // console.log(datos)
            return(datos)
        
        } else{
            throw(Error("Este es el mensaje de Error")) 
        }
  } catch (error){
    console.log(error)
  }
        
}


const pintarDatos = async() =>{
    try{
        const datos = await obtenerDatos("posts");
        console.log({datos})
        datos.forEach(({id, title}) => {
            //console.log(item)
            container.innerHTML+=`
                <td>${id}</td>
                <td>${title}</td>
                <th><button id=${id}>Más Info</button></th>
            `
        });
    }
    catch (error){
        console.log("Error de pintar")
        container.innerHTML+=`
                <p>Solicitud incorrecta</p>
            `
      }

}


const pintarNoticia = async(id) =>{
    try{
        const datos = await obtenerDatos(`posts/${id}`);
        console.log(datos.body)
        rightContainer.innerHTML=`
                <td>${datos.body}</td>
            `
        
    }
    catch (error){
        console.log("Error de pintar")
        rightContainer.innerHTML+=`
                <p>Solicitud incorrecta</p>
            `
      }

}


pintarDatos()



/*
-Obtener datos
-Pintar datos
-Imprimir descripción


*/


/* const obtenerDatos =async()=>{
    try{
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        
        return respuesta.ok ? respuesta.json() : Promise.reject("error")
           
        
    }
    catch (error){
        console.log(error)
        //throw
    }  

} */
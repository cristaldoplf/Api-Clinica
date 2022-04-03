/* const urlOdontologos = "http://localhost:8080/odontologos"
let settings = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; chartset=UTF-8"
  }
}

let listaOdontologos;

const getOdontologos= ()=> {
  fetch(urlOdontologos, settings)
    .then(response => {
      return response.json()
    })
    .then(data => {
      listaOdontologos = data
      console.log(data)
    })
    .catch(error => {
      console.log("Ocurrio un error al llamar a la API", error)
    })

}

const guardarLista = () =>{
  getOdontologos()  
  console.log(listaOdontologos)
  return listaOdontologos
}


export default guardarLista; */
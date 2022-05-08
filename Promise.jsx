import React, { useEffect } from 'react'

function App() {

const Netflix = [{nombre: "FRIENDS"},{nombre:"LA CASA DE PAPEL"},{nombre:"BLACKLIST"}];

useEffect(()=>{

const pedido= new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve(Netflix)
    }, 5000);
    
});
});
}

pedido.then((res) => console.log(res)).catch((err) => console.log(err))




const Promise = ({juegos}) => {
  return (
    <>
    {juegos.lenght >0 ? juegos.map((juego,index)  =>(
    <>
    <h1 key={index}>{juego.nombre}</h1>
    </>
))
:
(
    <h1>Cargando...</h1>
)
}
   </> 
  )
}


export default Promise
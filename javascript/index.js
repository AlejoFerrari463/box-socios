const hamburguesa = document.querySelector(".hamburguesa")

hamburguesa.addEventListener("click",()=>{

    const desplegar = document.querySelector(".hamburguesa_desplegar")
    desplegar.classList.add("activar-hamburguesa")
  
 
  

})

const perfil = document.querySelector(".perfil")

perfil.addEventListener("click",()=>{

    const desplegar = document.querySelector(".perfil_desplegar")
    desplegar.classList.add("activar-perfil")
  
 
  

})



document.addEventListener("click",()=>{

    const hamburguesa = document.querySelector(".hamburguesa")
    const desplegarHamburguesa = document.querySelector(".hamburguesa_desplegar")

   if (hamburguesa.contains(event.target)==false){
    desplegarHamburguesa.classList.remove("activar-hamburguesa")
   }

   const perfil = document.querySelector(".perfil")
   const desplegarPerfil = document.querySelector(".perfil_desplegar")

   if (perfil.contains(event.target)==false){
    desplegarPerfil.classList.remove("activar-perfil")
   }

})

document.addEventListener("touchmove",() => {
      const menuDesplegar = document.querySelector(".hamburguesa_desplegar");
      if (menuDesplegar && menuDesplegar.contains(event.target)) {
        event.preventDefault(); // Prevenir el desplazamiento táctil dentro del menú desplegable
      }

      const perfilDesplegar = document.querySelector(".perfil_desplegar");
      if (perfilDesplegar && perfilDesplegar.contains(event.target)) {
        event.preventDefault(); // Prevenir el desplazamiento táctil dentro del menú desplegable
      }


    }
    ,
    { passive: false }
  );
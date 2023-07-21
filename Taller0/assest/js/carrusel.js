/*Menu*/
const ham=document.getElementById("ham")
const men=document.querySelector(".menu")
const main=document.querySelector(".main")

ham.addEventListener('click',() =>{
    men.classList.remove('menu');
    men.classList.add('menu2'); 
})

main.addEventListener('click',() =>{
    men.classList.remove('menu2');
    men.classList.add('menu'); 
})



const comentarios=document.querySelector(".comentarios")
const punto=document.querySelectorAll(".punto")


punto.forEach( ( cadaPunto , i) =>{ 
    punto[i].addEventListener('click',()=>{

        let posi= i
        let ope= posi * -29
        comentarios.style.transform= `translateX(${ope}%)`
    
        punto.forEach(( cadaPunto, i )=>{

            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})



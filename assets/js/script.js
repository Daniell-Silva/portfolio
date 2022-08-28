
/*function expand() {
    let expandir = document.querySelector("#portModal");
    expandir.style.display = "block";
}

let todos = document.querySelectorAll('.verTodas'); 
let btVerTodos = document.querySelector('#btVerTodos');
for(let c = 0; c < btVerTodos.length; c++ ) {
    btVerTodos[c].addEventListener('click', function(){
        todas.style.display = "block";
    });
}*/


    



//BOX MODEL
//-----------------------------------------
function closeModal(){
    let expandir = document.querySelector("#portModal");
    expandir.style.display = "none";
}



 window.onclick = function(event) {
    let expandir = document.querySelector("#portModal");
    if (event.target == expandir ) {
        expandir.style.display = "none";
    }
//BOX MODEL
//alternar entre ocultar e mostrar o conteúdo suspenso     
    if (!event.target.matches('.btcontact')) {
        var boxContact = document.querySelectorAll('.box-contact');
  
        for (let i = 0; i < boxContact.length; i++) {
          let abrirContact = boxContact[i];
          if (abrirContact.classList.contains('show')) {
              abrirContact.classList.remove('show');
          }
        }
      }
 }
 //Quando o usuário clica no botão,
function abrirContato() {
    document.querySelector('#boxContact').classList.toggle("show");
  }
 //ABRIR E FEHAR BOX CONTATOS 
 //-----------------------------------------


 //FILTRO PORTIFOLIO 
 //-----------------------------------------
let imagens= document.querySelectorAll('.small_img');
let portModal = document.querySelector("#portModal");
let modalImg = document.querySelector('#modal_img');
let srcVal="";

    for (let i = 0; i < imagens.length; i++) {
        imagens[i].addEventListener('click', function(){
            portModal.style.display = "block";
            srcVal = imagens[i].getAttribute('src');
            modalImg.setAttribute('src', srcVal);
        });
        
    }

 const list = document.querySelectorAll('.list');
 const boxArea = document.querySelectorAll('.protfolioProjetoArea');

 for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function(){
        for(let y = 0; y < list.length; y++){
            list[y].classList.remove('active');  
        }
        //for (let b = 0; b < verTodas.length; b++) {
            //verTodas[b].style.display = "none";
            //btTodos.style.display = "block";
        //}
        this.classList.add('active');
        const dataFilter = this.getAttribute('data-filter');
        for(let k = 0; k < boxArea.length; k++){
            boxArea[k].classList.remove('active');
            boxArea[k].classList.add('hide');
            if(boxArea[k].getAttribute('data-projeto') == dataFilter || dataFilter == "all") {
                boxArea[k].classList.remove('hide');
                boxArea[k].classList.add('active');
            }
        }
        
    })
}
 //FILTRO PORTIFOLIO 
 //-----------------------------------------


//BOTÃO VER TODOS
//-----------------------------------------
//const btTodos = document.querySelector('#bt-todos');
//const verTodas = document.querySelectorAll('.verTodas');
//function btVerTodos() {
    //for (let b = 0; b < verTodas.length; b++) {
        //verTodas[b].style.display = "block";
        //btTodos.style.display = "none";
    //}   
//}
//BOTÃO VER TODOS 
//-----------------------------------------


//BOTÃO SCROLL TOP
const botaoTop = document.querySelector('.scrollButton');
botaoTop.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:'smooth',
    })
})

function animacroll() {
    if(window.scrollY === 0) {
       // botaoTop.style.display = 'none';
       botaoTop.style.marginBottom = '-50px';

    } else {
        //botaoTop.style.display = 'Block';
        botaoTop.style.marginBottom = '70px';
 
    }
}
window.addEventListener('scroll', animacroll);
//BOTÃO SCROLL TOP






// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amistades = document.getElementById("amigo")
const friendList = document.getElementById("listaAmigos")
const result = document.getElementById("resultado")
const sortText = document.getElementById ("sort-text")
let amigos = []  //strings
let current = 0



function agregarAmigo() {
    if (amistades.value.length == 1) 
    {
        console.log ("no puede estar vacio")
    } 
    else 
    {   
        amigos.push(amistades.value)
        amistades.value= ""
        console.log (amigos)
        friendList.innerHTML= "";
        amigos.forEach(Element =>{
            friendList.innerHTML += `<li>${Element} </li>`
        });
    }
}

function sortearAmigo (){

    if (current == 1){
        result.innerHTML = "";
        sortText.innerHTML = "choose a friend";
        current = 0;
    }
    if(amigos.length < 2){
        alert("you need at least two elements")
    }
    else{  
       
        if (current == 0){
            let randomNumber = Math.floor(Math.random() * amigos.length)
            result.innerHTML = `${amigos[randomNumber]}`;
            friendList.innerHTML = "";
            amigos = []
            sortText.innerHTML = "Play again";
            current = 1;
        }
    }
     
    }
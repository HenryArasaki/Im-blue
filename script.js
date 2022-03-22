const notas = document.querySelectorAll('[data-key]')
document.addEventListener('keydown',(e)=>{
    notas.forEach(element => {
        if (e.key==element.dataset.key){
        element.play()
        fazAnimacao(element)
        }
    });

})

const piano = document.getElementById("piano")

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

notas.forEach(element=>{
    const bola = document.createElement('div')
    bola.classList.add('bola')
    bola.style.left=(Math.floor((Math.random() * (viewportWidth-350))+100)+'px')
    bola.style.top=(Math.floor((Math.random() * (viewportHeight-350))+100)+'px')
    bola.dataset.key=element.dataset.key
    piano.append(bola)
})

const bolas = document.getElementsByClassName('bola')
function fazAnimacao(element){
    for(let bola of bolas){
        console.log(bola.dataset.key)
        if(element.dataset.key==bola.dataset.key){
            bola.classList.add('ativo')
            setTimeout(()=>bola.classList.remove('ativo'),300)
        }
    }
}


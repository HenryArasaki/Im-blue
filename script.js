const notas = document.querySelectorAll('[data-key]')
document.addEventListener('keydown',(e)=>{
    notas.forEach(element => {
        if (e.key==element.dataset.key){
        element.play()
        }
    });

})
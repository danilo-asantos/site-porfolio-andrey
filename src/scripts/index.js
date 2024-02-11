const carrosel = document.getElementsByClassName('slide-de-arte')
const setaVoltar = document.getElementsByClassName('fa-arrow-left')
const setaAvancar = document.getElementsByClassName('fa-arrow-right')
let imagemAtual = 0

let galeriaArteVoceTemTudo = document.querySelectorAll('.arte-voce-tem-tudo')

console.log(setaAvancar)

function esconderImagens(){
    galeriaArteVoceTemTudo.forEach(imagem =>{
        imagem.classList.replace('mostrar', "esconder")
    })
}

function mostrarImagens(){
    galeriaArteVoceTemTudo[imagemAtual].classList.replace('esconder', 'mostrar')
}

setaAvancar[0].addEventListener('click', () => {
    if(imagemAtual !== galeriaArteVoceTemTudo.length -1){
        imagemAtual++
        setaVoltar[0].classList.remove('esconder-seta')
        if(imagemAtual === galeriaArteVoceTemTudo.length -1){
            setaAvancar[0].classList.add('esconder-seta')
        }
    }

    esconderImagens()
    mostrarImagens()
})

setaVoltar[0].addEventListener('click', () =>{
    if(imagemAtual !== 0){
        imagemAtual--
        setaAvancar[0].classList.remove('esconder-seta')
    }
    if(imagemAtual == 0){
        setaVoltar[0].classList.add('esconder-seta')
    }

    esconderImagens()
    mostrarImagens()
})
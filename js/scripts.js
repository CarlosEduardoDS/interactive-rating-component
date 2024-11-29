const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3')
const num4 = document.querySelector('#num4')
const num5 = document.querySelector('#num5')
const firstPage = document.querySelector('#container')
const secondPage = document.querySelector('#secondPage')
const submit = document.querySelector('#submit-button')
const span = document.querySelector('#selection')

var selecionado = 0

function adicionarNumero() {
    span.textContent = selecionado
}

function clicar(botao){
    if(botao.classList.contains('clicado')){
        botao.classList.remove('clicado')
    } else {
        naoclicar()
        botao.classList.add('clicado')
    }
}

function naoclicar(){
    num1.classList.remove('clicado')
    num2.classList.remove('clicado')
    num3.classList.remove('clicado')
    num4.classList.remove('clicado')
    num5.classList.remove('clicado')
}

num1.addEventListener('click', () => {
    clicar(num1)
    selecionado = 1
})
num2.addEventListener('click', () => {
    clicar(num2)
    selecionado = 2
})
num3.addEventListener('click', () => {
    clicar(num3)
    selecionado = 3
})
num4.addEventListener('click', () => {
    clicar(num4)
    selecionado = 4
})
num5.addEventListener('click', () => {
    clicar(num5)
    selecionado = 5
})

submit.addEventListener('click', () => {
    firstPage.classList.add('none')
    secondPage.classList.remove('none')
    adicionarNumero()
})
